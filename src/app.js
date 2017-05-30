import $ from 'jquery';
import _ from 'underscore';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from './app/models/contact.js';
import Rolodex from './app/collections/rolodex.js';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var contactData = [
  {
    name: 'Ada',
    email: 'ada@example.com',
    phone: '555-555-5555'
  },
  {
    name: 'Galois',
    email: 'galois@example.com',
    phone: '444-555-5555'
  },
  {
    name: 'Turing',
    email: 'turing@example.com',
    phone: '333-555-5555'
  }
];

var myContactList = new Rolodex(contactData);

var render = function(contact) {
  var templateText = $('#tmpl-contact-card').html();
  var templateObject = _.template(templateText);
  var compiledHTML = $(templateObject(contact.toJSON()));
  $('#contact-cards').append(compiledHTML);
};

var renderList = function(contactList) {
  $('#contact-cards').empty();
  contactList.each(function(contact) {
    render(contact);
  });
};

var getFormData = function() {
  var formName = $('#name').val();
  $('#name').val('');
  var formEmail = $('#email').val();
  $('#email').val('');
  var formPhone = $('#phone').val();
  $('#phone').val('');

  return {
    name: formName,
    email: formEmail,
    phone: formPhone
  };
};

$(document).ready(function() {
  renderList(myContactList);

  myContactList.on('update', function() {
    renderList(myContactList);
  });

  $('.btn-save').click(function() {
    var contact = new Contact(getFormData());
    myContactList.add(contact);
  });
});
