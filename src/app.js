import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact.js';
import Rolodex from 'app/collections/rolodex.js';

import ContactView from 'app/views/contact_view.js';
import RolodexView from 'app/views/rolodex_view.js';

var contactData = [{
  name: 'Tofu Russell',
  email: 'PuffpuffFlufffluff@motherfluffer.org',
  phone:  'ˁ˚ᴥ˚ˀˁ˚ᴥ˚ˀˁ˚ᴥ˚ˀ - ˁ˚ᴥ˚ˀˁ˚ᴥ˚ˀˁ˚ᴥ˚ˀˁ˚ᴥ˚ˀ'
}, {
  name: 'Ada Lovelace',
  email: 'AideMyFluffFace@motherfluffer.org',
  phone: '01-110-0032'
}];

var rolodex = new Rolodex(contactData);

var rolodexView = new RolodexView({
  model: rolodex,
  contactTemplate: _.template($('#tmpl-contact-card').html()),
  el: 'div#application'
});

$(document).ready(function(){
  $("#contact-details").hide();

  $(".contact-card").click(function(event){
    event.stopPropagation();
  });

  $(window).click(function(event) {

    if ($("#contact-details").is(':visible')) {
        $("#contact-details").hide();
        console.log('why');
              }

      });

  $("#contact-details").click(function(){
    $("#contact-details").hide();
    $("#contact-details").empty();
  });

  rolodexView.render();

});
