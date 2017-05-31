import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact.js';
import Rolodex from './app/collections/rolodex.js';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

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
  },
  {
    name: 'Kell',
    phone: '333-999-8888',
    email: 'kell@maresh.com'
  },
  {
    name: 'Alucard',
    phone: '555-444-3333',
    email: 'alucard@emery.com'
  }
];

var myRolodex = new Rolodex(contactData);

var newContact = new Contact();
myRolodex.add(newContact);

var render = function(contact) {
  var templateText = $('#tmpl-contact-card').html();
  var templateObject = _.template(templateText);
  var compiledHTML = $(templateObject(contact.toJSON()));
  $('#contact-cards').append(compiledHTML);
};

var renderRolodex = function(contacts) {
  $('.contact-cards').empty();
  myRolodex.each(function(contact) {
    render(contact);
  });
};

var getFormData = function() {
  var inputName = $("input[name='name']");
  var inputEmail = $("input[name='email']");
  var inputPhone = $("input[name='phone']");

  if (inputName.val()) {
    var formName = inputName.val();
  }
  inputName.val('');

  if (inputEmail.val()) {
    var formEmail = inputEmail.val();
  }
  inputEmail.val('');

  if (inputPhone.val()) {
    var formPhone = inputPhone.val();
  }
  inputPhone.val('');

  return {
    name: formName,
    email: formEmail,
    phone: formPhone
  };
};

$(document).ready(function() {
  // render(testContact1);
  // render(testContact2);
  // render(new Contact());

  renderRolodex(myRolodex);

});
