import $ from 'jquery';
import Contact from 'app/models/contact';
import _ from "underscore";

var contactCardTemplate;

var myContact = new Contact({
  name: "Leonardi Davinci",
  phone: "(111)-111-1111",
  email: "leodavinci@gioconda.com"
});

var render = function(contact) {
  var jsonContact = contact.toJSON();
  var generatedHTML = contactCardTemplate(jsonContact);

  $('#contact-cards').append(generatedHTML);
};

$(document).ready(function() {

contactCardTemplate = _.template($('#tmpl-contact-card').html());
render(myContact);

  console.log("Name: " + myContact.get("name") +" "+ "Phone Number: " + myContact.get("phone") +" "+ "Email: "+ myContact.get("email"));

});
