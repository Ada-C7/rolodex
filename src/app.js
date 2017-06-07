import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';

var contactTemplate;

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

var render = function(contact) {
  // underscore template
  var templateCard = _.template($("#tmpl-contact-card").html());
  // send contact info to template
  var infoInTemplate = templateCard(contact.toJSON());
  // update the DOM
  $('#contact-cards').append(infoInTemplate);
};


$(document).ready(function() {
  $("#contact-details").hide();
});
