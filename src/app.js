import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact.js';
import Rolodex from './app/collections/rolodex.js';
import ContactView from './app/views/contact_view.js';
import RolodexView from './app/views/rolodex_view.js';

var contactData = [
  {
    name: 'Ada LoveLace',
    email: 'lovelace@example.com',
    phone: '555-555-5555'
  },
  {
    name: 'Évariste Galois',
    email: 'galois@example.com',
    phone: '444-555-5555'
  },
  {
    name: 'Alan Turing',
    email: 'turing@example.com',
    phone: '333-555-5555'
  },
  {
    name: 'Paul Erdős',
    email: 'erdős@example.com',
    phone: '222-555-5555'
  },
  {
    name: 'Emmy Noether',
    email: 'noether@example.com',
    phone: '777-555-5555'
  },
  {
    name: 'Leonhard Euler',
    email: 'euler@example.com',
    phone: '888-555-5555'
  },
  {
    name: 'Kurt Gödel',
    email: 'gödel@example.com',
    phone: '999-555-5555'
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
