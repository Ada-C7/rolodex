import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact.js';
import Rolodex from 'app/collections/rolodex.js';
import ContactView from 'app/views/contact_view.js';
import RolodexView from 'app/views/rolodex_view.js';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var contactData = [
  {
    name: "Bob Belcher",
    phone: "12x3456",
    email: "bob@burgers.com"
  }, {
    name: "Louise Belcher",
    phone: "345x6789",
    email: "louise@burgers.com"
  }, {
    name: "Tina Belcher",
    phone: "0987654x",
    email: "tina@burgers.com"
  }
];

var myContact = new Contact({
  name: "Jimmy Pesto",
  phone: "4958305s",
  email: "jimmy@pesto.com"
});

var secondContact = new Contact({});

var myRolodex = new Rolodex(contactData);

// var render = function(contact) {
//   var templateText = $("#tmpl-contact-card").html();
//   var templateObject = _.template(templateText);
//   var compiledHTML = $(templateObject(contact.toJSON()));
//   $("#contact-cards").append(compiledHTML);
// };

$(document).ready(function(){

  var myRolodexView = new RolodexView({
    model: myRolodex,
    template: _.template($('#tmpl-contact-card').html()),
    el: '#application',
  });
  console.log(myRolodexView);

  myRolodexView.render();
});
