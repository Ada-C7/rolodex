import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import $ from 'jquery';
import _ from 'underscore';

import Contact from './app/models/contact.js';
import Rolodex from './app/collections/rolodex.js';
import ContactView from './app/views/contact_view.js';
import ContactDetailView from './app/views/contact_detail_view.js';
import EditContactView from './app/views/edit_contact_view.js';
import RolodexView from './app/views/rolodex_view.js';


var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var contactData = [
  {
    name: "Aurora",
    phone: "555-555-555",
    email: "fake@fakey.com"
  },
  {
    name: "Felix",
    phone: "666-666-6666",
    email: "supafake@fakey.com"
  }
];

var myRolodex = new Rolodex(contactData);

$(document).ready(function() {

  var myRolodexView = new RolodexView({
    model: myRolodex,
    template: _.template($("#tmpl-contact-card").html()),
    el: '#application'
  });
  myRolodexView.render();

});
