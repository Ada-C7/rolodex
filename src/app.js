import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
//===================================
import _ from 'underscore';
import $ from 'jquery';
// import 'jquery-colpick';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view.js';
import ContactListView from 'app/views/contact_list_view';


//===================================
var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});
//===================================

var contactTemplate;

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
  name: "Name",
  phone: "12345766",
  email: "a123@com"
}];

var contactList;

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

// var render = function(contact){
//   $('#contact-details').empty();
//   var generatedHTML = contactDetailsTemplate(contact.toJSON()); // give template data to generate html
//   $('#contact-details').append(generatedHTML);
// };
//
// var renderList = function(taskList) {
//   $('#contact-cards').empty();
//   contactList.each(function(contact) {
//     var contactView = new ContactView({
//       model: contact,
//       template: _.template($('#tmpl-contact-card').html())
//     });
//     $('#contact-cards').append(contactView.render().$el);
//   });
//
//   $('.contact-card').click(function(){
//     var name = $(this).text().trim();
//     var contact = contactList.find(function(model){return model.get('name') == name;});
//     render(contact);
//   });
//
// };
// cHANGED THIS TO CODE ABOVE:
// var renderList = function(contactList) {
//   $('#contact-cards').empty();
//   contactList.each(function(contact) {
//     renderContactName(contact);
//   });
// };


$(document).ready(function() {
  contactList = new Rolodex(contactData);
  // contactDetailsTemplate = _.template($('#tmpl-contact-details').html());

  contactTemplate = _.template($('#tmpl-contact-card').html());

  $('.add-contact').click( function(){
    var contact = new Contact(readNewContactForm() );
    contactList.add(contact);
  });
  $('.cancel-contact').click(function(){
    var contact = new Contact(readNewContactForm() );
  });

  // renderList(contactList);

  // contactList.on("update", function() {
  //   renderList(contactList);
  // });


  var contactListView = new ContactListView({
    contactTemplate: contactTemplate,
    model: contactList,
    el: $('main')
  });

  contactListView.render();




});
