import $ from 'jquery';
import _ from 'underscore';
import Contact from '../spec/app/models/contact.js';

var contactTemplate;

var contactData = [
  {
    name: "Brendon Small",
    email:"makin_movies1996@gmail.com",
    phone: "222-2222"
  }
];

var render = function(contact) {
  var newContact = contact.toJSON();
  console.log(newContact);

  // var generatedHTML = $(contactTemplate(newContact));
  // console.log(generatedHTML);
  //
  // $('#postits').append(generatedHTML);
  //
  // generatedHTML.find(".button").click({postit: postit}, function(params) {
  //   postitList.add(params.data.postit);
  // });
};


$(document).ready(function() {
  // contactTemplate = _.template($('#tmple-contact-card').html());

  contactData.forEach(function(rawContact) {
    var contact = new Contact(rawContact);
    render(contact);
  });

  console.log("Working.");
});
