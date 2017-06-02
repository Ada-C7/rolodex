import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';

import ContactView from '../src/app/views/contact_view.js';
import RolodexView from 'app/views/rolodex_view';

var contactDetailTemplate;
var contactTemplate;
var contactData = [
{
  name: "George Weasley",
  email: "bertiebotts@gmail.com",
  phone: "206-call-gorg"
},
{
  name: "Fred Weasley",
  email: "everyflavorbean@gmail.com",
  phone: "206-ima-fred"
}
]

// var render = function(contact) {
//   var generatedHTML = $(contactTemplate(contact.toJSON()));
//
//   $('#contact-cards').append(generatedHTML);
// }

// var renderRolodex = function(contactData) {
//   $('#contact-cards').empty();
//
//   contactData.each(function(contact) {
//     render(contact);
//   });
// };

// var readContactForm = function() {
//   var name = $('#name').val();
//   $('#name').val('');
//
//   var email = $('#email').val();
//   $('#email').val('');
//
//   var phone = $('#phone').val();
//   $('#phone').val('');
//
//   return {
//     name: name,
//     email: email,
//     phone: phone
//   }
// }

var rolodex = new Rolodex(contactData);

$(document).ready(function() {
  contactDetailTemplate = _.template($('#tmpl-contact-details').html());
  contactTemplate = _.template($('#tmpl-contact-card').html());
  // rolodex.on('update', function(){
  //   renderRolodex(rolodex);
  // });

  var rolodexView = new RolodexView({
    contactTemplate: contactTemplate,
    detailTemplate: contactDetailTemplate,
    model: rolodex,
    el: $('body')
  });

  rolodexView.render();
  // renderRolodex(rolodex);

  // $('#application .btn-save').click( function() {
  //   var contact = new Contact(readContactForm());
  //   rolodex.add(contact);
  // });
});
