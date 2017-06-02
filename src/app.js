import $ from 'jquery';
import _ from 'underscore';
import Application from './app/models/application.js';
import ApplicationView from './app/views/application_view.js';
import Contact from './app/models/contact.js';
import Rolodex from './app/collections/rolodex.js';
import ContactView from './app/views/contact_view.js';
import RolodexView from './app/views/rolodex_view.js';

var application = new Application ();
var appview = new ApplicationView({
  el: '#application',
  model: application
});

var contactData = [
  {
    name: 'Alix',
    email: 'boom@boom.com',
    phoneNumber: '5555555555'
  }, {
    name: 'Hammy',
    email: 'ham@boom.com',
    phoneNumber: '5555565555'
  }, {
    name: 'Hilary',
    email: 'hilla@boom.com',
    phoneNumber: '5575555555'
  }
];

var rolodex = new Rolodex(contactData);

$(document).ready(function () {
  $('#contact-details').hide();

  var rolodexView = new RolodexView({
    model: rolodex,
    template: _.template($('#tmpl-contact-card').html()),
    el: 'body'
  });

  rolodexView.render();
});
