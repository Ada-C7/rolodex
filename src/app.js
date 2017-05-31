import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact.js';
import Rolodex from './app/collections/rolodex.js';
import ContactView from './app/views/contact_view.js';
import RolodexView from './app/views/rolodex_view.js';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});


var newContact = new Contact({
  name: "Ann Dai",
  email: "gofarann@gmail.com",
  phone: "701-306-7504"
});

var contactData = [
  {
    name: "Young Park",
    email: "ypark22@gmail.com",
    phone: "832-466-4421"
  },
  {
    name: "David Dai",
    email: "wenhao.dai@gmail.com",
    phone: "832-466-4421"
  }
];

var myContacts = new Rolodex(contactData);

// --------------render cards or rolodex--------------------
// var renderCard = function(contact){
//   var templateText = $('#tmpl-contact-card').html();
//   var templateObject = _.template(templateText);
//   var compiledHTML = $(templateObject(contact.toJSON()));
//   $('#contact-cards').append(compiledHTML);
// };

// var renderRolodex = function(rolodex){
//   $('#contact-cards').empty();
//
//   rolodex.each(function(contact) {
//     // renderCard(contact);
//     // replacing render cards with contact view
//     var contactView = new ContactView({
//       model: contact,
//       template: _.template($('#tmpl-contact-card').html()),
//     });
//
//     $('#contact-cards').append(contactView.render().$el);
//
//   });
// };

// --------------get form data--------------------

var getFormData = function(){
  var formName = $('#name').val();
  $('#name').val('');

  var formEmail = $('#email').val();
  $('#email').val('');

  var formPhone = $('#phone').val();
  $('#phone').val('');

  return {
    name: formName,
    email: formEmail,
    phone: formPhone
  };
};

// --------------clear form data--------------------

var clearFormData = function(){
  $('#name').val('');
  $('#email').val('');
  $('#phone').val('');
};


// --------------Document Ready--------------------


$(document).ready(function() {
  // renderCard(newContact);

  $('.btn-save').click(function(){
    var formData = getFormData();
    var newContact = new Contact(formData);

    myContacts.add(newContact);
  });

  $('.btn-cancel').click(function(){
    clearFormData();
  });


  var myRolodex = new Rolodex();

  var myRolodexView = new RolodexView({
    model: myRolodex,
    template: _.template($('#tmpl-contact-card').html()),
    el: 'main'
  });
  myRolodexView.render();
});
