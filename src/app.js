import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact.js';

var myContact = new Contact({
  name: "Ada",
  email: "ada@ada.org",
  phone: 6172779728
});

var render = function(Contact) {
  var templateText = $('#tmpl-contact-card').html();

  var templateObject = _.template(templateText);

  var compiledHTML = templateObject(Contact.toJSON());

  $("#contact-cards").append(compiledHTML);
};

$(document).ready(function() {
  // console.log(myContact.get("name"));
  render(myContact);

});
