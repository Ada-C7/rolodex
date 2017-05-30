import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact.js';
// import Rolodex from 'collections/rolodex.js';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

// console.log("hey");

var contactData = [
  {
    name: 'Rhy',
    phone: '444-445-5555',
    email: 'rhy@maresh.com'
  },
  {
    name: 'Lila',
    phone: '222-111-6666',
    email: 'lila@bard.com'
  }
];

var testContact1 = new Contact(contactData[0]);
var testContact2 = new Contact(contactData[1]);

var render = function(contact) {
  var templateText = $('#tmpl-contact-card').html();
  var templateObject = _.template(templateText);
  var compiledHTML = $(templateObject(contact.toJSON()));
  $('#contact-details').append(compiledHTML);
};

var renderRolodex = function(contacts) {

};

var getFormData = function() {
  var formName;

  var formEmail;

  var formPhone;

  return {
    name: formName,
    email: formEmail,
    phone: formPhone
  };
};

$(document).ready(function() {
  render(testContact1);
  render(testContact2);

});
