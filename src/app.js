import _ from 'underscore';
import $ from 'jquery';
import Application from 'app/models/application';
import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';

var contactData = [{
  name: "José",
  email: "jose@gmail.com",
  phone: "2069999999"
}];

var application = new Application();
var contactTemplate;
var rolodex = new Rolodex(contactData);


// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });

// var render = function(contact){
//   var jsonContact = contact.toJSON();
//   console.log(jsonContact);
//   var generatedHTML = contactTemplate(jsonContact);
//   $("#contact-cards").append(generatedHTML);
// };


// var readContactForm = function() {
//   var nameData = $('#name').val();
//   $('#name').val("");
//
//   var emailData = $('#email').val();
//   $('#email').val("");
//
//   var phoneData = $('#phone').val();
//   $('#phone').val("");
//
//   var contactData = {};
//
//   if (nameData != ""){
//     contactData["name"] = nameData;
//   }
//   if (emailData != ""){
//     contactData["email"] = emailData;
//   }
//   if (phoneData != ""){
//     contactData["phone"] = phoneData;
//   }
//
//   return contactData;
// };

// var renderRolodex = function(rolodex) {
//   console.log('hello');
//   $('#contact-cards').empty();
//
//   rolodex.each(function(contact){
//     // contact.logStatus();
//     // render(contact);
//     var contactView = new ContactView({
//       model: contact,
//       template: _.template($('#tmpl-contact-card').html())
//     });
//     contactView.render();
//     console.log("Rendered HTML:");
//     console.log(contactView.$el);
//     $('#contact-cards').append(contactView.$el);
//   });
// };

$(document).ready(function() {
  // contactTemplate = _.template($("#tmpl-contact-card").html());
  //
  // rolodex.on("update", function(){
  //   renderRolodex(rolodex);
  // });
  //
  // renderRolodex(rolodex);

  $('#contact-details').hide();

  var rolodexView = new RolodexView({
    model: rolodex,
    template: _.template($('#tmpl-contact-card').html()),
    contactTemplate: _.template($('#tmpl-contact-details').html()),
    el: 'body'
  });

  rolodexView.render();
  //
  // $('.btn-save').click(function(event){
  //   var formData = readContactForm();
  //   // console.log('heeeeeeeeeeeeeeeeeeeeeeeeeeeere form');
  //   // console.log(formData);
  //   var contact = new Contact(formData);
  //   // console.log('heeeeeeeeeeeeeeeeeeeeeeeeeeeere contact');
  //   // console.log(contact);
  //
  //   rolodex.add(contact);
  // });
  // $('.btn-cancel').click(function(event){
  //   readContactForm();
  // });
});

// end
