import $ from 'jquery';
import _ from 'underscore';

import Contact from './app/models/contact';
import Rolodex from './app/collections/rolodex';

import ContactView from './app/views/contact_view';
import RolodexView from './app/views/rolodex_view';

// var contactTemplate
// var rolodex

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

var rolodex = new Rolodex(contactData);



$(document).ready(function() {
  var rolodexView = new rolodexView({
    model: rolodex,
    template: _.template($('#tmpl-contact-card').html()),
    contactTemplate: _.template($("#tmpl-contact-details").html()),
    el: $('#contact-cards')
  });

  rolodexView.render();

  // rolodex = new Rolodex(contactData);
    // $("#contact-cards").append(cv.render().$el); //the dollar sign targets everything inside the object

  //
  // rolodex.each(function(contact) {
  //   var cv = new ContactView({
  //     model: contact,
  //     template: contactTemplate
  //   });
  //   $("#contact-cards").append(cv.render().$el); //the dollar sign targets everything inside the object
  // })

  // var rolodexView = new RolodexView({
  //   contactTemplate: contactTemplate,
  //   model: rolodex, //referring to this new rolodex that contains the content data
  //   el: $('#contact-cards')
  // })



});
