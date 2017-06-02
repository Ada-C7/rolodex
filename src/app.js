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

$(document).ready(function() {
  $('#contact-details').hide();
  var myRolodexView = new RolodexView({
    model: myRolodex,
    template: _.template($('#tmpl-contact-card').html()),
    detailsTemplate: _.template($('#tmpl-contact-details').html()),
    el: 'body'
  });
  myRolodexView.render();
});
