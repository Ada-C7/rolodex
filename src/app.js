import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';

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
//
// var render = function(contact) {
//   // underscore template
//   var templateCard = _.template($("#tmpl-contact-card").html());
//   // send contact info to template
//   var infoInTemplate = templateCard(contact.toJSON());
//   // update the DOM
//   $('#contact-cards').append(infoInTemplate);
// };

var myContacts = new Contact(contactData);

$(document).ready(function() {
  $("#contact-details").hide();
  var templateCard = _.template($("#tmpl-contact-card").html());
  // send contact info to template
  var infoInTemplate = templateCard(myContacts.toJSON());
  // update the DOM
  $('#contact-cards').append(infoInTemplate);
});
