import $ from 'jquery';
import _ from 'underscore';

import Contact from './app/models/contact';

var myContact = new Contact({
  name: "Sahana",
  email: "s.murthy730@yahoo.com",
  phone: "707-293-8907"
});

var render = function(contact) {

  var template_text = $('#tmpl-contact-card').html();

  var templateObject = _.template(template_text);

  var compiledHTML = templateObject(contact.toJSON());

  $('#contact-cards').append(compiledHTML);
};

$(document).ready(function() {

  console.log(myContact.get("name") + myContact.get("email") + myContact.get("phone"));
  render(myContact);
});
