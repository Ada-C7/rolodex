import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact.js';
import Rolodex from './app/collections/rolodex.js';

// var myContact = new Contact({
//   name: "Ada",
//   email: "ada@ada.org",
//   phone: 6172779728
// });

var contactsData = [
  {
    name: "Ada",
    email: "ada@ada.org",
    phone: 6172779728
  },
  {
    name: "Grace",
    email: "grace@ada.org",
    phone: 6172779340
  },
  {
    name: "Katherine",
    email: "kat@ada.org",
    phone: 6178358880
  },
  {
    name: "ME",
    email: "me@ada.org",
    phone: 1000000000
  }
];

var myRolodex = new Rolodex(contactsData);

var render = function(Contact) {
  var templateText = $('#tmpl-contact-card').html();

  var templateObject = _.template(templateText);

  var compiledHTML = templateObject(Contact.toJSON());

  $("#contact-cards").append(compiledHTML);
};

var renderList = function(Rolodex) {
  $("contact-cards").empty();
  Rolodex.each(function(Contact) {
    render(Contact);
  });
};

$(document).ready(function() {
  // console.log(myContact.get("name"));
  // render(myContact);
  renderList(myRolodex);

});
