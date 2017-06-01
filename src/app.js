import $ from 'jquery';
import _ from 'underscore';
// can use any name for 'the thing we are importing'. It's just convenient to use the same name as used when it was exported.
import Contact from 'app/models/contact';
import Rolodex from './app/collections/rolodex';

import ContactView from './app/views/contact_view';
import RolodexView from './app/views/rolodex_view';


var contactCardTemplate;
// var contactDetailsTemplate;

var contactData =
[{
  name: 'Papa Smurf',
  email: 'bigpapa@smurfs.net',
  phone: '201-424-4242'
},{
  name: 'Smurfette',
  email: 'ladysmurf@smurfs.net',
  phone: '201-555-3333'
},{
  name: 'Gargamel',
  email: 'smurfcatcher@smurfs.net',
  phone: '201-666-6666'
},{
  name: 'Carpenter Smurf',
  email: 'hammerman@smurfs.net',
  phone: '201-666-6666'
}
];


// From within old render function:
// var render =  function(contact){
// var compiledDetailsTemplateHTML =
// $(contactDetailsTemplate(jsonContact));

// $('#contact-details').append(compiledDetailsTemplateHTML);
// };



// var readNewContactForm = function() {
//   // Get the values from the fields
//   var nameData = $('.name').val();
//   var emailData = $('.email').val();
//   var phoneData = $('.phone').val();
//
//   clearForm();
//
//   return {
//     name: nameData,
//     email: emailData,
//     phone: phoneData
//   };
//
// };
//
// var clearForm = function(){
//   $('.input').val('');
// };


$(document).ready(function() {
  // compiling the templates
  contactCardTemplate = _.template($('#tmpl-contact-card').html());


  var rolodex = new Rolodex(contactData);

  var rolodexView = new RolodexView({
    template: contactCardTemplate,
    model: rolodex,
    el: $('body')
  });

  rolodexView.render();



  // contactDetailsTemplate = _.template($('#tmpl-contact-details').html());



  // $('.btn-save').click(function(event){
  //   var formData = readNewContactForm();
  //   var contact = new Contact(formData);
  //
  //   // Add the Contact to the rolodex
  //   rolodex.add(contact);
  //   console.log("new contact:");
  //   console.log(contact);
  // });
  //
  // $('.btn-cancel').click(function(event){
  //   clearForm();
  // });

});
