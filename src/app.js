import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact.js';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var myContact = new Contact({
  name: "Lynn",
  phone: 2062401029,
  email: "lynn@test.com"
});

var render = function(contact) {
  var templateText = $("#tmpl-contact-card").html();

  var templateObject = _.template(templateText);

  var compiledHTML = templateObject(contact.toJSON());

  $("#contact-cards").append(compiledHTML);
};

$(document).ready(function() {
  $("#contact-details").hide();
  console.log(myContact);
  render(myContact);
});
