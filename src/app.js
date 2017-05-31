// import Application from 'app/models/application';
// import ApplicationView from 'app/views/application_view';

import _ from 'underscore';
import $ from 'jquery';
import Contact from './models/contact.js';
import Rolodex from './collections/rolodex.js';
import ContactView from './views/contact_view.js';
import RolodexView from './views/rolodex_view.js';

// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });

$('#contact-details').hide();

var contactData = [
  {
    name: "Theresa",
    phone: "1234567891",
    email: "theresa@yo.com"
  },
  {
    name: "Stella",
    phone: "9876543219",
    email: "stella@yo.com"
  }
];

var myRolodex = new Rolodex(contactData);

var renderList = function(contactList) {
  $('#contact-cards').empty();
  contactList.each(function(contact) {
    var contactView = new ContactView({
      model: contact,
      template: _.template($('#tmpl-contact-card').html())
    });
    $('#contact-cards').append(contactView.render().el);
    // render(contact);
  });
};

$(document).ready(function() {
  renderList(myRolodex);
  myRolodex.on("update", function() {
    renderList(myRolodex);
  });
  $('.button.btn-save').click(function() {
    var contact = new Contact(getFormData());
    myRolodex.add(contact);
  });
  $('.button.btn-cancel').click(function() {
    // clear out form
    console.log('cancel button pressed');
    $('#contact-form').empty();
  });

});
