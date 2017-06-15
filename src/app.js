import $ from 'jquery';
import Contact from 'app/models/contact';
import _ from "underscore";
import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view.js';
import RolodexView from 'app/views/rolodex_view.js';

var contactCardTemplate;
var contactList;
var detailCardTemplate;

var contactData = [{
  name: "Leonardo Davinci",
  phone: "(111)-111-1111",
  email: "leodavinci@gioconda.com"
},
{
  name: "Sir Walter Scott",
  phone: "(111)-222-2222",
  email: "sirscott@marmion.com"
}];

// var render = function(contact) {
//   var jsonContact = contact.toJSON();
//   var generatedHTML = contactCardTemplate(jsonContact);
//
//   $('#contact-cards').append(generatedHTML);
// };

$(document).ready(function() {

  contactCardTemplate = _.template($('#tmpl-contact-card').html());

  detailCardTemplate = _.template($('#tmpl-contact-details').html());

  contactList = new Rolodex(contactData);
  // contactList.on("update", function(){
  //   renderList(contactList);
  // });

  var rolodexView = new RolodexView({
    model: contactList,
    detailsTemplate: detailCardTemplate,
    contactTemplate: _.template($('#tmpl-contact-card').html()),
    el: '#application'

  });
  rolodexView.render();
  // contactData.forEach(function(contactData){
  //   var contact = new Contact(contactData);
  //
  //   console.log("Name: " + contact.get("name") +" "+ "Phone Number: " + contact.get("phone") +" "+ "Email: "+ contact.get("email"));
});
