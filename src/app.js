import _ from 'underscore';
import $ from 'jquery';

import Contact from 'app/models/contact';
import ContactList from './app/collections/rolodex';

var contactTemplate;
var contactList;

var contactData = [
  {
    name: 'Dara',
    phoneNumber: '555-1212',
    email: 'dara@email.com'
  }, {
    name: 'Rachel',
    phoneNumber: '207-20I-LUVU',
    email: 'rachel@email.com'
  }, {
    name: 'Lynn',
    phoneNumber: '555-1234',
    email: 'lynn@email.com'
  }, {
    name: 'Jenni',
    phoneNumber: '867-5309',
    email: 'jenni@email.com'
  }];

  // var readContactForm = function() {
  //   var nameData = $("name").val();
  //   $("#name").val("");
  // }

// var myContact = new Contact(contactData[0]);

var render = function(contact) {
  var jsonContact = contact.toJSON();
  var generatedHTML = contactTemplate(jsonContact);
  console.log(generatedHTML);

  $("#contact-cards").append(generatedHTML);
};

var renderList = function(contactList) {
  $("#contact-cards").empty();
  contactList.each(function(contact) {
    render(contact);
  });
};

contactList = new ContactList(contactData);

$(document).ready(function() {
  // console.log(myContact.get("name"));

  contactTemplate = _.template($('#tmpl-contact-card').html());

  renderList(contactList);

  // render(myContact);
});
