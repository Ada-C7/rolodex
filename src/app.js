import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';
import Rolodex from './app/collections/rolodex.js';
var contactTemplate;

var contactData = [
  {
    name: "Andre Anderson",
    email: "andre@gmail.com",
    phone: "555-555-5555"
  },
  {
    name: "Michael Michaelson",
    email: "MM@gmail.com",
    phone: "333-333-3333"
  },
];

var newContact = new Contact({
    name: "Felicia Anderson",
    email: "andre@gmail.com",
    phone: "555-555-5555"
});

var rolodex = new Rolodex(contactData);

var render = function(contact) {
  var generatedHTML = $(contactTemplate(contact.toJSON()));

  $('#contact-cards').append(generatedHTML);

  // generatedHTML.find(“button.alert”).click({task: task}, function(params) {
  //   taskList.remove(params.data.task);
  // });
};


$(document).ready(function() {

  contactTemplate = _.template($('#tmpl-contact-card').html());

  var renderRolodex = function(rolodex) {
    // Clear the unordered list
    $('#contact-cards').empty();

    rolodex.each(function(contact) {
      render(contact);
    });
  };
  // renderRolodex(rolodex);

  rolodex.on("update", function() {
  renderRolodex(rolodex);
});
rolodex.add(newContact);
});
