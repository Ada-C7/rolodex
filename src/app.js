import $ from 'jquery';
import _ from 'underscore';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from './app/models/contact.js';
import Rolodex from './app/collections/rolodex.js';
import ContactView from './app/views/contact_view.js';
import RolodexView from './app/views/rolodex_view.js';

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

var myRolodex = new Rolodex(contactData);

var renderList = function(contactList) {
  $('#contact-cards').empty();
  contactList.each(function(contact) {
    var contactView = new ContactView({
      model: contact,
      template: _.template($('#tmpl-contact-card').html())
    });
    $('#contact-cards').append(contactView.render().el);
  });
};

var getFormData = function() {
  var formName = $('#name').val();
  var formEmail = $('#email').val();
  var formPhone = $('#phone').val();
  clearForm();
  return {
    name: formName,
    email: formEmail,
    phone: formPhone
  };
};

var clearForm = function() {
  $('#name').val('');
  $('#email').val('');
  $('#phone').val('');
};

$(document).ready(function() {
  // renderList(myContactList);
  //
  // myContactList.on('update', function() {
  //   renderList(myContactList);
  // });

  var myRolodexView = new RolodexView({
    model: myRolodex,
    template: _.template($('#tmpl-contact-card').html()),
    el: 'main'
  });
  myRolodexView.render();

  $('.btn-save').click(function() {
    var contact = new Contact(getFormData());
    myRolodex.add(contact);
  });

  $('.btn-cancel').click(clearForm);
});
