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

var getFormData = function() {
  var formName = $("#name").val();
  $("#name").val('');

  var formEmail = $("#email").val();
  $("#email").val('');

  var formPhone = $("#phone").val();
  $("#phone").val('');

  return {
    name: formName,
    email: formEmail,
    phone: formPhone
  };
};

var clearFormData = function() {
  $("#name").val('');
  $("#email").val('');
  $("#phone").val('');
};

var render = function(contact) {
  var templateText = $('#tmpl-contact-card').html();

  var templateObject = _.template(templateText);

  var compiledHTML = templateObject(contact.toJSON());

  $("#contact-cards").append(compiledHTML);
};

var renderList = function(Rolodex) {
  $("#contact-cards").empty();
  Rolodex.each(function(contact) {
    render(contact);
  });
};


$(document).ready(function() {
  // console.log(myContact.get("name"));
  // render(myContact);
  renderList(myRolodex);

  $(".btn-save").click(function() {
    var contact = new Contact(getFormData());
    myRolodex.add(contact);
    renderList(myRolodex);
  });

  $(".btn-cancel").click(function() {
    clearFormData();
  });

});
