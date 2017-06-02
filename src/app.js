import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import _ from 'underscore';
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

// var newContact = new Contact();
// myRolodex.add(newContact);

$(document).ready(function() {
  var myRolodexView = new RolodexView({
    model: myRolodex,
    template: _.template($("#tmpl-contact-card").html()),
    el: "body"
  });
  myRolodexView.render();

  $("#contact-details").hide();

});
