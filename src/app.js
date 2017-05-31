import $ from 'jquery';
import _ from 'underscore';
import Contact from '../spec/app/models/contact.js';
import Rolodex from '../spec/app/collections/rolodex';

var contactTemplate;
var rolodex;

var contactData = [
  {
    name: 'Brendon Small',
    email:'makin_movies1996@gmail.com',
    phone: "222-2222"
  },
  {
    name: 'Coach John McGuirk',
    email:'not_a_gym_teacher@gmail.com',
    phone: "333-3333"
  },
  {
    name: 'Melissa Robbins',
    email:'happy_method_actor@gmail.com',
    phone: "444-4444"
  }
];

var render = function(contact) {
  var newContact = contact.toJSON();
  console.log(newContact);

  var generatedHTML = $(contactTemplate(newContact));
  console.log(generatedHTML);

  $('#contact-cards').append(generatedHTML);
};

var renderRolodex = function(rolodex) {
  $('#contact-cards').empty();

  rolodex.each(function(contact) {
    render(contact);
  });
};

var readContactForm = function() {
  var name = $('#name').val();
  $('#name').val('');

  var email = $('#email').val();
  $('#email').val('');

  var phone = $('#phone').val();
  $('#phone').val('');

  return {
    name: name,
    email: email,
    phone: phone
  };
};

$(document).ready(function() {
  contactTemplate = _.template($('#tmpl-contact-card').html());
  rolodex = new Rolodex(contactData);

  rolodex.on('update', function() {
    renderRolodex(rolodex);
  });

  renderRolodex(rolodex);

  console.log("Working.");

  $('.btn-save').click(function(event) {
    var formData = readContactForm();
    console.log(formData);

    //Changed from Rolodex to Contact
    var contact = new Contact(formData);
    rolodex.add(contact);
  });
});
