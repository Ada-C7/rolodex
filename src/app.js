import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact';
import Rolodex from './app/collections/rolodex';
import ContactView from './app/views/contact_view';


var contactData = [
  {
    name: 'Richard Hendricks',
    email: 'hendricks@piedpipper.org',
    number: '(650)111-1111'
  },
  {
    name: 'Erlich Bachman',
    email: 'bachmanity.net',
    number: '(650)111-1111'
  },
  {
    name: 'Big Head',
    email: 'bighetti@stanford.edu',
    number: '(650)111-1111'
  },
  {
    name: 'Bertram Gilfoyle',
    email: 'gilfoyle@piedpipper.org',
    number: '(650)111-1111'
  },
  {
    name: 'Dinesh Chugtai',
    email: 'chugtai@seefood.org',
    number: '(650)111-1111'
  },
  {
    name: 'Monica Hall',
    email: 'hall@raviga.org',
    number: '(650)111-1111'
  },
  {
    name: 'Jian Yang',
    email: 'yang@seefood.org',
    number: '(650)111-1111'
  }
];

$(document).ready(function() {
  var contactTemplate = _.template($('#tmpl-contact-card').html());

  var contactList = new Rolodex(contactData);
  contactList.each(function(contact) {
    var contactView = new ContactView({
      model: contact,
      template: contactTemplate
    });
    // var generatedHTML = contactTemplate(contact.toJSON());
    $('#contact-cards').append(contactView.render().$el);
  });

  // var contact = new Contact(contactData[0]);
  // var contactView = new ContactView({
  //   model: contact,
  //   template: contactTemplate
  // });
  // // var generatedHTML = contactTemplate(contact.toJSON());
  // $('#contact-cards').append(contactView.render().$el);
});
