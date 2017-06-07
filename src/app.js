import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view';

var contactTemplate;
var rolodex;

var contactData = [
  {
    name: "Kaitlin",
    email: "queenforever@email.com",
    phone: "234-567-8910"
  },
  {
    name: "Sam",
    email: "inevercheckmyemail@email.com",
    phone: "444-567-8910"
  },
];

// ------------------
// Wave 1
// ------------------
// var render = function(contact) {
//   var jsonTalk = contact.toJSON();
//   // send contact info to template
//   var generatedHTML = contactTemplate(jsonTalk);
//   // update the DOM
//   $('#contact-cards').append(generatedHTML);
// };


$(document).ready(function() {
  $("#contact-details").hide();
  contactTemplate = _.template($("#tmpl-contact-card").html());
  rolodex = new Rolodex(contactData);
  
  // ------------------
  // Wave 1
  // ------------------
  // contactTemplate = _.template($("#tmpl-contact-card").html());
  // contactData.forEach(function(rawContact) {
  //   var myContacts = new Contact(rawContact);
  //   render(myContacts);
  // });

});
