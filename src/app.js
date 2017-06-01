import $ from 'jquery';
import _ from 'underscore';

// import MODELS
import Contact from 'app/models/contact'
import Rolodex from 'app/collections/rolodex'

// GLOBAL variables
var contactCardTemplate;
var contactDetailsTemplate;
var rolodexList;



var contactData = [
  {
    name: 'Donald Duck',
    phone: '206 111 1111',
    email: 'donalds@email.com'
  },
  {
    name: 'Minnie Mouse',
    phone: '206 111 2222',
    email: 'minnies@email.com'
  }
]

var oneContact = new Contact(contactData[0]);

var readForm = function(){
  var formName = $('#name').val();
  $('#name').val('');

  var formEmail = $('#email').val();
  $('#email').val('');

  var formPhone = $('#phone').val();
  $('#phone').val('');

  var formData = {};
  if (formName && formName != "") {
    formData["name"] = formName
  }
  if (formEmail && formEmail != "") {
    formData["email"] = formEmail
  }
  if (formPhone && formPhone != "") {
    formData["phone"] = formPhone
  }
  return formData;
};

var renderContact = function(contact){
  var jsonContact = contact.toJSON();
  var generateHTML = contactCardTemplate(jsonContact);
  $('#contact-cards').append(generateHTML);
};

var renderRolodex = function(rolodexList){
  $('#contact-cards').empty();
  rolodexList.each(function(contact){
    renderContact(contact);
  });
};



$(document).ready(function() {
  contactCardTemplate = _.template($('#tmpl-contact-card').html());
  // var generateHTML1 = contactCardTemplate(oneContact.toJSON());
  // $('#contact-cards').append(generateHTML1);
  rolodexList = new Rolodex(contactData);
  rolodexList.on('update', function(){
    renderRolodex(rolodexList);
  })
  renderRolodex(rolodexList);

  $('.btn-save').click(function(event){
    var formData = readForm();
    var newContact = new Contact(formData);
    rolodexList.add(newContact);
  });



  contactDetailsTemplate = _.template($('#tmpl-contact-details').html());
  var generateHTML2 = contactDetailsTemplate(oneContact.toJSON());
  $('#contact-details').append(generateHTML2);






});
