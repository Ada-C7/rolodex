import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';

var contactCardTemplate;
var contactList;

var contactData = [{
  name: "Ada Lovelace",
  phone: "(416) 733-2221",
  email: "Ada@adadevelopersacademy.org"
},
{
  name: "Ting Wong",
  phone: "(416) 733-2222",
  email: "Ting@adadevelopersacademy.org"
}];

var render = function(contact) {
  var jsonContact = contact.toJSON();
  var generatedHTML = contactCardTemplate(jsonContact);

  $('#contact-cards').append(generatedHTML);
};

$(document).ready(function() {
  contactCardTemplate = _.template($('#tmpl-contact-card').html());

  contactData.forEach(function(contactData) {
    var contact = new Contact(contactData);
    console.log("Name: " + contact.get("name") +  " Phone Number:" + contact.get("phone") + " Email: " + contact.get("email"));
    render(contact);
  });

});
