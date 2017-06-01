import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact.js';
import Rolodex from './app/collections/rolodex.js';
import ContactView from './app/views/contact_view.js';
import RolodexView from './app/views/rolodex_view.js';


var newContact = new Contact({
  name: "Ann Dai",
  email: "gofarann@gmail.com",
  phone: "701-306-7504"
});

var contactData = [
  {
    name: "Young Park",
    email: "ypark22@gmail.com",
    phone: "832-466-4421"
  },
  {
    name: "David Dai",
    email: "wenhao.dai@gmail.com",
    phone: "832-466-4421"
  }
];

var myContacts = new Rolodex(contactData);

var myRolodexView = new RolodexView({
  model: myContacts,
  template: _.template($('#tmpl-contact-card').html()),
  el: '#application'
});

$(document).ready(function() {
  myRolodexView.render();
});
