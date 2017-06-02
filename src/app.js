import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact.js';
import Rolodex from './app/collections/rolodex.js';
import ContactView from './app/views/contact_view.js';
import RolodexView from './app/views/rolodex_view.js';

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
    name: "Kat",
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

// var getFormData = function() {
//   var formName = $("input[name=name]").val();
//   $("input[name=name]").val('');
//
//   var formEmail = $("input[name=email]").val();
//   $("input[name=email]").val('');
//
//   var formPhone = $("input[name=phone]").val();
//   $("input[name=phone]").val('');
//
//   return {
//     name: formName,
//     email: formEmail,
//     phone: formPhone
//   };
// };

// var render = function(contact) {
//   var templateText = $('#tmpl-contact-card').html();
//
//   var templateObject = _.template(templateText);
//
//   var compiledHTML = templateObject(contact.toJSON());
//
//   $("#contact-cards").append(compiledHTML);
// };

// var renderList = function(Rolodex) {
//   $("#contact-cards").empty();
//   Rolodex.each(function(contact) {
//     render(contact);
//   });
// };


$(document).ready(function() {
  // console.log(myContact.get("name"));
  // render(myContact);
  // renderList(myRolodex);
  var myRolodexView = new RolodexView( {
    model: myRolodex,
    template: _.template($('#tmpl-contact-card').html()),
    el: 'body'
  });

  myRolodexView.render();

  // $(".btn-save").click(function() {
  //   var contact = new Contact(getFormData());
  //   myRolodex.add(contact);
  //   renderList(myRolodex);
  // });

  // $(".btn-cancel").click(function() {
  //   clearFormData();
  // });

  $("#contact-details").hide();
});
