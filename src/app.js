import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import _ from 'underscore';
import Contact from './models/contact.js';
import Rolodex from './collections/rolodex.js';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var contactData = [
  {
    name: "Bob Belcher",
    phone: "12x3456",
    email: "bob@burgers.com"
  }, {
    name: "Louise Belcher",
    phone: "345x6789",
    email: "louise@burgers.com"
  }, {
    name: "Tina Belcher",
    phone: "0987654x",
    email: "tina@burgers.com"
  }
];
