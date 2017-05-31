import $ from 'jquery';
import _ from 'underscore';

// import MODELS
import Contact from 'app/models/contact'

var contactData = [
  {
    name: 'Donald Duck',
    phone: '206 111 1111',
    email: 'donalds@email.com'
  }
]

var oneContact = new Contact(contactData[0]);

$(document).ready(function() {
  var contactCardTemplate = _.template($('#tmpl-contact-card').html());
  var generateHTML1 = contactCardTemplate(oneContact.toJSON());
  $('#contact-cards').append(generateHTML1)

  var contactDetailsTemplate = _.template($('#tmpl-contact-details').html());
  var generateHTML2 = contactDetailsTemplate(oneContact.toJSON());
  $('#contact-details').append(generateHTML2)
});
