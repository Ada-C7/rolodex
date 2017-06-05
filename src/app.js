import $ from "jquery";
import _ from "underscore";

import Contact from "./app/models/contact.js"
import Rolodex from "./app/collections/rolodex.js"
import ContactView from "./app/views/contact_view"
import RolodexView from "./app/views/rolodex_view"

var contactTemplate;
var rolodex;
var contact;
var modalTemplate;

var contactData = [
  {
    name: "John",
    email: "john@mail.com",
    phone: "425-444-5555"
  },
  {
    name: "Sandy",
    email: "sandy@mail.com",
    phone: "425-555-6666"
  }
]



// var render = function(contact){
//   var compiledHTML = contactTemplate(contact.toJSON());
//   console.log("HTML");
//   console.log(compiledHTML);
//   $("#contact-cards").append(compiledHTML);
// }

var renderList = function(rolodex){
  rolodex.each(function(contact){
    render(contact);
  })
}

$(document).ready(function(){
  contactTemplate = _.template($("#tmpl-contact-card").html());
  modalTemplate = _.template($("#tmpl-contact-details").html());
  $("#contact-details").hide();

  // contact = new Contact(contactData[0])
  rolodex = new Rolodex(contactData);

  // var contactView = new ContactView({
  //   template: contactTemplate,
  //   model: contact
  // })

  var rolodexView = new RolodexView({
    template: contactTemplate,
    model: rolodex,
    modalTemplate: modalTemplate,
    el: $('body')
  });

  rolodexView.render();
  // console.log(contactView.el);
  // contactView.render();

  // rolodex.on("update", function(){
  //   renderList(rolodex);
  // });
  //
  // renderList(rolodex);

});
