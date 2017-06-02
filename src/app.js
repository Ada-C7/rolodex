import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';
import Rolodex from './app/collections/rolodex';

import ContactView from './app/views/contact_view.js';

var contactTemplate
var rolodex

var contactData = [
  {
    name: "Humphrey Bogart",
    email: "we'llalwayshaveparis@gmail.com",
    phone_number: "555-9382"
  }
];

$(document).ready(function() {
  contactTemplate = _.template($("#tmpl-contact-card").html());
  rolodex = new Rolodex(contactData);


});
