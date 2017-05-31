import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';

var contactCardTemplate;

var myContact = new Contact({
  name: "Sofia",
  email: "sofia@adadevelopers.com",
  phone: "222-222-2222"
});


var render = function(myContact){
  var jsoncontactCard = myContact.toJSON();
  var generatedHTML = contactCardTemplate(jsoncontactCard);

  $('#contact-cards').append(generatedHTML);
};

$(document).ready(function() {

  console.log(myContact.get("name") +  " : " + myContact.get("email") + myContact.get("phone"));

  contactCardTemplate = _.template($('#tmpl-contact-card').html());

  render(myContact);

});
