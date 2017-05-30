import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact.js';
import Rolodex from 'app/collections/rolodex.js';

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

var render = function(contact) {
  var templateText = $("#tmpl-contact-card").html();
  var templateObject = _.template(templateText);
  var compiledHTML = $(templateObject(contact.toJSON()));
  $("#contact-cards").append(compiledHTML);
};

$(document).ready(function(){
  render(myContact);
});
