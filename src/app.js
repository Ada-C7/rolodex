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

var contactData = [ {
  name: "A name",
  phone_num: "3057778888",
  email: "email@email.com"
}, {
  name: "Bo",
  phone_num: "2223334444",
  email: "bo@bo.com"
}];

var contactView = new Rolodex(contactData);

var rolodexView = new RolodexView({
  model: contactView,
  template: _.template($('#tmpl-contact-card').html()),
  el: 'body'
});

$(document).ready(function() {
  rolodexView.render();
});
