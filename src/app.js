import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact';

var rolodexTemplate;

var rolodexData = [{
name: "Marisol",
email: "mlopez@mail.com",
phone: "562-320-9014"
}];

var myContact = new Contact(rolodexData[0]);

var render = function(contact) {
  var jsonContact = contact.toJSON();
  var generatedHTML = rolodexTemplate(jsonContact);
  console.log(generatedHTML);
  $("#contact-cards").append(generatedHTML);
};

$(document).ready(function(){
  rolodexTemplate = _.template($("#tmpl-contact-card").html());
  render(myContact);
})
