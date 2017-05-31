import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';
var contactTemplate;

var contactData= [
  {
    name: "TJ O'Pootertoot",
    email: "tj@pootertoots.com",
    phone: "666-666-6666"
  }, {
    name: "Francisca Fernandez",
    email: "francesca@gmail.com",
    phone: "555-555-5555"
  }
];

var newContact = new Contact(contactData[0]);

var render = function(contact) {
  var generatedHTML = $(contactTemplate(contact.toJSON()));

  $('#contact-cards').append(generatedHTML);

  // generatedHTML.find("button.alert").click({task: task}, function(params) {
  //   taskList.remove(params.data.task);
  // });
};

console.log(newContact);

$(document).ready(function() {

  contactTemplate = _.template($("#tmpl-contact-details").html());

  render(newContact)



});
