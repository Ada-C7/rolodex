import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact';
import Rolodex from './app/collections/rolodex';
import ContactView from './app/views/contact_view';
import RolodexView from './app/views/rolodex_view';


var contactData = [
  {
    name: 'Richard Hendricks',
    email: 'hendricks@piedpipper.org',
    phone: '(650)111-1111'
  },
  {
    name: 'Erlich Bachman',
    email: 'bachmanity.net',
    phone: '(650)222-2222'
  },
  {
    name: 'Big Head',
    email: 'bighetti@stanford.edu',
    phone: '(650)333-3333'
  },
  {
    name: 'Bertram Gilfoyle',
    email: 'gilfoyle@piedpipper.org',
    phone: '(650)444-4444'
  },
  {
    name: 'Dinesh Chugtai',
    email: 'chugtai@seefood.org',
    phone: '(650)555-5555'
  },
  {
    name: 'Monica Hall',
    email: 'hall@raviga.org',
    phone: '(650)888-8888'
  },
  {
    name: 'Jian Yang',
    email: 'yang@seefood.org',
    phone: '(650)777-7777'
  }
];

$(document).ready(function() {
  // $('#contact-details').hide();
  var contactTemplate = _.template($('#tmpl-contact-card').html());
  var contactInfoTemplate = _.template($('#tmpl-contact-details').html());

  var rolodex = new Rolodex(contactData);
  var rolodexView = new RolodexView({
    contactTemplate: contactTemplate,
    contactInfoTemplate: contactInfoTemplate,
    model: rolodex,
    el: $('body')
  });

  rolodexView.render();
  // contactList.each(function(contact) {
  //   var contactView = new ContactView({
  //     model: contact,
  //     template: contactTemplate
  //   });
  //   // var generatedHTML = contactTemplate(contact.toJSON());
  //   $('#contact-cards').append(contactView.render().$el);
  // });

  // var contact = new Contact(contactData[0]);
  // var contactView = new ContactView({
  //   model: contact,
  //   template: contactTemplate
  // });
  // // var generatedHTML = contactTemplate(contact.toJSON());
  // $('#contact-cards').append(contactView.render().$el);
});
