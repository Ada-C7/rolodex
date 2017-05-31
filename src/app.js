import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
//===================================
import _ from 'underscore';
import $ from 'jquery';
// import 'jquery-colpick';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';

//===================================
var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});


//===================================

var contactDetailsTemplate;
var contactTemplate;
var contactNameTemplate;

var contactData = [{
  name: "Natalia",
  phone: "232332332",
  email: "nat@com"
},
{
  name: "David",
  phone: "322323323",
  email: "dav@com"
},
{
  name: "SomeName",
  phone: "12345766",
  email: "a123@com"
}];


var  contactList = new Rolodex(contactData);

var readNewContactForm = function() {
  var formName= $('#name').val();
  $('#name').val('');
  var formEmail= $('#email').val();
  $('#email').val('');
  var formPhone= $('#phone').val();
  $('#phone').val('');

  var contactData = {};
  if (formName && formName != ""){
    contactData["name"] = formName;
  }
  if (formEmail){
    contactData["email"] = formEmail;
  }
  if (formPhone){
    contactData["phone"] = formPhone;
  }
  return contactData;
};



var render = function(contact){
  var generatedHTML = contactDetailsTemplate(contact.toJSON()); // give template data to generate html
  $('#contact-details').append(generatedHTML);
};

var renderContactName = function(contact){
  var generatedHTML = contactNameTemplate(contact.toJSON()); // give template data to generate html
  $('#contact-cards').append(generatedHTML);
};


var renderList = function(contactList) {
  $('#contact-cards').empty();
  contactList.each(function(contact) {
    renderContactName(contact);
  });
};



$(document).ready(function() {
  contactDetailsTemplate = _.template($('#tmpl-contact-details').html());
  contactNameTemplate = _.template($('#tmpl-contact-card').html());


  $('.add-contact').click( function(){
    var contact = new Contact(readNewContactForm() );
    contactList.add(contact);
  });
  $('.cancel-contact').click(function(){
    var contact = new Contact(readNewContactForm() );
  });

  renderList(contactList);

  contactList.on("update", function() {
    renderList(contactList);
  });

  $('.contact-card').click(function(){
    var name = $(this).text().trim();
    var contact = contactList.find(function(model){return model.get('name') == name;});
    // console.log(contact);
    render(contact);
  });



});
