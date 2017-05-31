import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
var contactDetailTemplate;
var contactData = [
{
  name: "George Weasley",
  email: "bertiebotts@gmail.com",
  phone: "206-call-gorg"
},
{
  name: "Fred Weasley",
  email: "everyflavorbean@gmail.com",
  phone: "206-ima-fred"
}
]

var rolodex = new Rolodex(contactData);

var render = function(contact) {
  var generatedHTML = $(contactDetailTemplate(contact.toJSON()));

  $('#contact-details').append(generatedHTML);
}

var renderRolodex = function(contactData) {
  $('#contact-details').empty();

  contactData.each(function(contact) {
    render(contact);
  });
};

var readContactForm = function() {
  var name = $('#name').val();
  $('#name').val('');

  var email = $('#email').val();
  $('email').val('');

  var phone = $('#phone').val();
  $('phone').val('');

  return {
    name: name,
    email: email,
    phone: phone
  }
}

$(document).ready(function() {
  contactDetailTemplate = _.template($('#tmpl-contact-details').html());

  rolodex.on('update', function(){
    renderRolodex(rolodex);
  });

  renderRolodex(rolodex);

  $('#application .btn-save').click( function() {
    var contact = new Contact(readContactForm());
    rolodex.add(contact);
  });
});
