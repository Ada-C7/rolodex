import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';

var contactTemplate;
var rolodex;

var contactData = [{
  name: "Anacelia",
  phone: "111-1111",
  email: "anacelia@ugh.com"
}, {
  name: "Anacelia2",
  phone: "222-2222",
  email: "anacelia2@ugh.com"
}];

// var firstContact = new Contact(contactData);

// var render = function(contact) {
//   var myContact = contact.toJSON();
//   var generatedHTML = contactTemplate(myContact);
//   $('#contact-cards').append(generatedHTML);
// };

$(document).ready(function(){
  contactTemplate = _.template($("#tmpl-contact-card").html());

  rolodex = new Rolodex(contactData);

  var rolodexView = new RolodexView({
    contactTemplate: contactTemplate,
    model: rolodex,
    el: $('application'),
  });
  // render(firstContact);

  $("#contact-details").hide();
});
