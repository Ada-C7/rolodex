import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact';

var contactTemplate;

var contactData = {
  name: "Anacelia",
  phone: "111-1111",
  email: "anacelia@ugh.com"
}

var firstContact = new Contact(contactData);

var render = function(contact) {
  var myContact = contact.toJSON();
  var generatedHTML = contactTemplate(myContact);
  $('#contact-cards').append(generatedHTML);
};

$(document).ready(function(){
  contactTemplate = _.template($("#tmpl-contact-card").html());

  console.log("success!");
  render(firstContact);

  $("#contact-details").hide();
});
