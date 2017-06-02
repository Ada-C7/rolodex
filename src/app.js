import _ from 'underscore';
import $ from 'jquery';

import Contact from 'app/models/contact';
import Rolodex from './app/collections/rolodex';
import ContactView from './app/views/contact_view.js';
import RolodexView from './app/views/contact_list_view.js';

var contactTemplate;
var contactList;
var contactCardDetailsTemplate;

var contactData = [
  {
    name: 'Dara',
    phoneNumber: '555-1212',
    email: 'dara@email.com'
  }, {
    name: 'Rachel',
    phoneNumber: '207-20I-LUVU',
    email: 'rachel@email.com'
  }, {
    name: 'Lynn',
    phoneNumber: '555-1234',
    email: 'lynn@email.com'
  }, {
    name: 'Jenni',
    phoneNumber: '867-5309',
    email: 'jenni@email.com'
  }];

  $("#contact-details").hide();

$(document).ready(function() {

  contactTemplate = _.template($('#tmpl-contact-card').html());
  contactCardDetailsTemplate = _.template($('#tmpl-contact-details').html());
  
  contactList = new Rolodex(contactData);

  var contactListView = new RolodexView({
    contactTemplate: contactTemplate,
    model: contactList,
    el: $('#application')
  });

$(window).click(function(event) {
  if(event.target.id !== 'contact-details'){
    $("#contact-details").hide();
  }
})

contactListView.render();

});
