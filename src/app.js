import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact';

var contactCardTemplate;

var myContact = new Contact({
  name: "Ada Lovelace",
  phone: "(416) 733-2221",
  email: "Ada@adadevelopersacademy.org"
});

var render = function(contact) {
  var jsonContact = contact.toJSON();
  var generatedHTML = contactCardTemplate(jsonContact);

  $('#contact-cards').append(generatedHTML);
};

$(document).ready(function() {
  contactCardTemplate = _.template($('#tmpl-contact-card').html());
  console.log("Name: " + myContact.get("name") +  " Phone Number:" + myContact.get("phone") + " Email: " + myContact.get("email"));

  render(myContact);
});
