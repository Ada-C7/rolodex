import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';
import Rolodex from './app/collections/rolodex';

import ContactView from './app/views/contact_view';

var contactTemplate
var rolodex

var contactData = [
  {
    name: "Humphrey Bogart",
    email: "we'llalwayshaveparis@gmail.com",
    phone_number: "555-9382"
  },

  {
    name: "Bugs Bunny",
    email: "what'supdoc?@gmail.com",
    phone_number: "523-9382"
  }

];

$(document).ready(function() {
  contactTemplate = _.template($("#tmpl-contact-card").html());
  rolodex = new Rolodex(contactData);
  // contact = new Contact ()
  // contentView = new ContactView ()
  rolodex.each(function(contact) {
    var cv = new ContactView({
      model: contact,
      template: contactTemplate
    });
    $("#contact-cards").append(cv.render().$el); //the dollar sign targets everything inside the object
  })



});
