import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact.js';
import Rolodex from 'app/collections/rolodex.js';
import ContactView from 'app/views/contact_view.js';
import RolodexView from './app/views/rolodex_view.js';

var rolodexTemplate;
var contactList;
var contactCardDetailsTemplate;
var detailsTemplate;

var rolodexData = [
  {
    name: "Mark",
    email: "mrolling@mail.com",
    phone: "818-320-8765"
  },
  {
    name: "April",
    email: "acurray@mail.com",
    phone: "213-913-7766"
  },
  {
    name: "Nancy",
    email: "nroberts@mail.com",
    phone: "562-699-9109"
  },
  {
    name: "Fructuoso",
    email: "fdelosangeles@mail.com",
    phone: "706-432-5555"
  }
];

//this is how to hide the box
  $("#contact-details").hide();

$(document).ready(function(){
  rolodexTemplate = _.template($("#tmpl-contact-card").html());
  contactCardDetailsTemplate = _.template($("#tmpl-contact-details").html());

  contactList = new Rolodex(rolodexData);
  var rolodexView = new RolodexView({
    detailsTemplate: contactCardDetailsTemplate,
    rolodexTemplate: rolodexTemplate,
    model: contactList,
    el: $("#application")
  });

  //this is where I am hiding it if I click anywhere else on the screen.
  $(window).click(function(event){
    if(event.target.id !== 'contact-details') {
      $("#contact-details").hide();
    }
  })

  rolodexView.render();
})
