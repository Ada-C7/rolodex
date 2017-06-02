import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';

var contactTemplate;
var rolodex;
var detailTemplate;

var contactData = [{
  name: "Anacelia",
  phone: "111-1111",
  email: "anacelia@ugh.com"
}, {
  name: "Anacelia2",
  phone: "222-2222",
  email: "anacelia2@ugh.com"
}];

$(document).ready(function(){
  $("#contact-details").hide();

  $(window).on("click", function(event) {
    if ($("#contact-details").is(':hidden')) {
      console.log("it's hidden");
    } else {
      console.log("is visible");
      $("#contact-details").hide();
    }
  });

  contactTemplate = _.template($("#tmpl-contact-card").html());
  detailTemplate = _.template($("#tmpl-contact-details").html());

  rolodex = new Rolodex(contactData);

  var rolodexView = new RolodexView({
    contactTemplate: contactTemplate,
    detailTemplate: detailTemplate,
    model: rolodex,
    el: $('#application'),
  });

  rolodexView.render();

});
