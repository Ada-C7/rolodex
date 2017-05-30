import $ from 'jquery';
import _ from 'underscore';
import Contact from '/app/models/contact';
// import Application from './src/app/models/application';
// import ApplicationView from './src/app/views/application_view';


// WAVE 1
var myContact = new Contact({
  name: "chris",
  phone: "8005553333",
  email: "notreal@gmail.com"
});

var renderContact = function(contact){

  var contactTemplate = _.template($('#tmpl-contact-card').html());
  var contactDetails = contactTemplate({
    name: contact.get("name")
  });
  $('#contact-cards').append($(contactDetails));
};

$(document).ready(function() {
  renderContact(myContact);
});
