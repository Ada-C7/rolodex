import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact.js';
import $ from 'jquery';
import _ from 'underscore';

var contactData = [
  {
    name: "Joe",
    email: "joe_blow86@example.com",
    phone: "444-555-6666"
  }
];


var myContact = new Contact({
  name: "Sue",
  email: "sue_shmo86@example.com",
  phone: "444-555-7777"
});

var render = function(contact) {
  var templateName = $('#tmpl-contact-card').html();

  var templateObject = _.template(templateName);

  var compiledHTML = (templateObject(contact.toJSON()));

};


var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});


$(document).ready(function() {
  render(myContact);
});
