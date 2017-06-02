import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact';
import Rolodex from './app/collections/rolodex';
import ContactView from '/app/views/contact_view';
// import RolodexView from './app/views/rolodex_view';


var contactData = [
  {
    name: "Mina",
    email: "Mina@yahoo.com",
    phone: "614-516-2473"
  }, {
    name: "Rosco",
    email: "Rosco@yahoo.com",
    phone: "614-342-4223"
  }
];

var myContactList = new Rolodex(contactData);

var myContact = new Contact({
  name: "Haby",
  email: "haby@gmail.com",
  phone: "614-517-6803"
});


$(document).ready(function() {
var myContactView = new ContactView({
  model: myContact,
  template: _.template($('#tmpl-contact-card').html()),
  el: 'ul'
});
myContactView.render();
});
