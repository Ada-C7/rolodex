import $ from 'jquery';
import _ from 'underscore';

import Contact from './app/models/contact';
import Rolodex from './app/collections/rolodex';
import ContactView from './app/views/contact_view.js';
import RolodexView from './app/views/rolodex_view';

// var myContact = new Contact({
//   name: "Sahana",
//   email: "s.murthy730@yahoo.com",
//   phone: "707-293-8907"
// });

var contactsData = [
  {
    name: "Ronu",
    email: "ronurocks@yahoo.com",
    phone: "916-895-3598"
  }, {
    name: "Kulfi",
    email: "woof@yahoo.com",
    phone: "916-895-2374"
  }, {
    name: "Sahana",
    email: "s.murthy730@yahoo.com",
    phone: "707-293-8907"
  }
];

// var render = function(contact) {
//
//   var template_text = $('#tmpl-contact-card').html();
//
//   var templateObject = _.template(template_text);
//
//   var compiledHTML = templateObject(contact.toJSON());
//
//   $('#contact-cards').append(compiledHTML);
// };

var rolodex = new Rolodex(contactsData);

// var renderList = function(contactList) {
//   $('#contact-cards').empty();
//
//   contactList.each(function(contact) {
//
//     var contactView = new ContactView({
//       model: contact,
//       template: _.template($('#tmpl-contact-card').html()),
//       // tagName: 'li'
//     });
//
//     $('#contact-cards').append(contactView.render().$el);
//   });
// };

$(document).ready(function() {

  var rolodexView = new RolodexView({
    model: rolodex,
    template: _.template($('#tmpl-contact-card').html()),
    el: 'body'
  });

  rolodexView.render();
});
