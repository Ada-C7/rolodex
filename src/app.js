import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact.js';
import Rolodex from './app/collections/rolodex.js';
import ContactView from './app/views/contact_view.js';
import RolodexView from './app/views/rolodex_view.js';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

// var myContact = new Contact({
//   name: "Lynn",
//   phone: 2062401029,
//   email: "lynn@test.com"
// });

var contactData = [
  {
    name: "Mom",
    phone: 2063658186,
    email: "mom@test.com"
  },
  {
    name: "Lynn",
    phone: 2062401029,
    email: "lynn@test.com"
  },
  {
    name: "Annie",
    phone: 2061234589,
    email: "Annie@test.com"
  }
];

var myRolodex = new Rolodex(contactData);



$(document).ready(function() {
  $("#contact-details").hide();

  var myRolodexView = new RolodexView({
    model: myRolodex,
    template: _.template($("#tmpl-contact-card").html()),
    el: 'body'
  });
  // console.log("before render");
  myRolodexView.render();
});
