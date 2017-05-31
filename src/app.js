import _ from 'underscore';
import $ from 'jquery';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';

var contactData = [{
  name: "José",
  email: "jose@gmail.com",
  phone: "2063839101"
}];

var application = new Application();
var rolodex = new Rolodex();

var contactTemplate;

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var render = function(contact){
  var jsonContact = contact.toJSON();
  console.log(jsonContact);
  var generatedHTML = contactTemplate(jsonContact);
  $("#contact-cards").append(generatedHTML);
};


var readContactData = function() {
  var nameData = $('#name').val();
  $('#name').val("");

  var emailData = $('#email').val();
  $('#email').val("");

  var phoneData = $('#phone').val();
  $('#phone').val("");

  var contactData = {};

  if (nameData && nameData != ""){
    contactData["name"] = nameData;
  }
  if (emailData && emailData != ""){
    contactData["email"] = emailData;
  }
  if (phoneData && phoneData != ""){
    contactData["phone"] = phoneData;
  }

  return contactData;
};

var renderRolodex = function(rolodex) {
  $('#contact-cards').empty();

  rolodex.each(function(contact){
    contact.logStatus();
    render(contact);
  });
};

$(document).ready(function() {
  contactTemplate = _.template($("#tmpl-contact-card").html());

  $('.btn-save').click(function(event){
  var contact = new Contact(readContactData());

  rolodex.add(contact);
  });

  rolodex.on("update", function(){
    renderRolodex(rolodex);
  });

});

// end
