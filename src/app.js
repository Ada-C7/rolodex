import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact.js';
import Rolodex from 'app/collections/rolodex.js';
import ContactView from 'app/views/contact_view.js';
import RolodexView from './app/views/rolodex_view.js';

var rolodexTemplate;
var contactList;

var rolodexData = [
  {
    name: "Marisol",
    email: "mlopez@mail.com",
    phone: "562-320-9014"
  },
  {
    name: "Isabel",
    email: "ilopez@mail.com",
    phone: "562-324-9727"
  },
  {
    name: "Angelica",
    email: "alopez@mail.com",
    phone: "562-325-7777"
  }
];

//for a single contact
// var myContact = new Contact(rolodexData[0]);

// var contactList = new Rolodex(rolodexData);

// var render = function(contact) {
//   var jsonContact = contact.toJSON();
//   var generatedHTML = rolodexTemplate(jsonContact);
//   console.log(generatedHTML);
//   $("#contact-cards").append(generatedHTML);
// };

// var renderList = function(contactList) {
//   $("#contact-details").empty();
//   contactList.each(function() {
//     render(contact)
//   });

// }

$(document).ready(function(){
  rolodexTemplate = _.template($("#tmpl-contact-card").html());
  contactList = new Rolodex(rolodexData);

  // render(myContact);
  // rolodexList = new Contact(myContact);
  // var contactView = new ContactView({
  //   template: rolodexTemplate,
  //   model: myContact
  // });
  // contactView.render();
  // $("#contact-cards").append(contactView.$el);

  var rolodexView = new RolodexView({
    template: rolodexTemplate,
    model: contactList,
    el: $("main")
  });
  rolodexView.render();
})
