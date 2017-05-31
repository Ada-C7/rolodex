import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';

var contactCardTemplate;

var contactData = [{
  name: "Sofia",
  email: "sofia@adadevelopers.com",
  phone: "222-222-2222"
},
{
  name: "Ting",
  email: "ting@adadevelopers.com",
  phone: "222-222-2222"
}];


var render = function(myContact){
  var jsoncontactCard = myContact.toJSON();
  var generatedHTML = contactCardTemplate(jsoncontactCard);

  $('#contact-cards').append(generatedHTML);
};

$(document).ready(function() {

  contactCardTemplate = _.template($('#tmpl-contact-card').html());

  contactData.forEach(function(contactData){
    var contact = new Contact(contactData);
    console.log(contact.get("name") +  " : " + contact.get("email") + contact.get("phone"));

    render(contact);

  });
});
