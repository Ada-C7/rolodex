import _ from 'underscore';
import $ from 'jquery';

import Contact from 'app/models/contact';

var contactTemplate;

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

var myContact = new Contact(contactData[0]);

var render = function(contact) {
  var jsonContact = myContact.toJSON();
  var generatedHTML = contactTemplate(jsonContact);
  console.log(generatedHTML);

  $("#contact-cards").append(generatedHTML);
};

$(document).ready(function() {
  console.log(myContact.get("name"));

  contactTemplate = _.template($('#tmpl-contact-card').html());

  render(myContact);
});
