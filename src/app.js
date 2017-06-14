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
    phone: '206-555-1212',
    email: 'dara@email.com'
  }, {
    name: 'Rachel',
    phone: '207-203-4567',
    email: 'rachel@email.com'
  }, {
    name: 'Lynn',
    phone: '206-555-1234',
    email: 'lynn@email.com'
  }, {
    name: 'Jenni',
    phone: '206-867-5309',
    email: 'jenni@email.com'
  }];

  $("#contact-details").hide();

  $(document).ready(function() {

    contactTemplate = _.template($('#tmpl-contact-card').html());
    contactCardDetailsTemplate = _.template($('#tmpl-contact-details').html());

    contactList = new Rolodex(contactData);

    var contactListView = new RolodexView({
      contactTemplate: contactTemplate,
      contactCardDetailsTemplate: contactCardDetailsTemplate,
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
