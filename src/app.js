import $ from 'jquery';
import _ from 'underscore';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact.js';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var render = function(contact) {
  console.log("rendering:  ",  contact);
  var templateText = $("#tmpl-contact-card").html();
  var templateObject =_.template(templateText);
  var compiledHTML =$(templateObject(contact.toJSON()));
  $('#contact-cards').append(compiledHTML);
};

var staticContact = new Contact({
  name: "J Junior",
  phone: "1234567890",
  email: "jj@example.com"
});

var staticContactTwo = new Contact({
  name: "J Senior",
  phone: "1234567890",
  email: "23232"
});

$(document).ready(function(){
  render(staticContact);
  render(staticContactTwo);
});
