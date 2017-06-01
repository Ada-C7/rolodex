// import Application from 'app/models/application';
// import ApplicationView from 'app/views/application_view';

import $ from 'jquery';
import _ from 'underscore';
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


$(document).ready(function() {
  var myRolodexView = new RolodexView({
    model: myRolodex,
    template: _.template($('#tmpl-contact-card').html()),
    el: 'body'
  });
  myRolodexView.render();
});
