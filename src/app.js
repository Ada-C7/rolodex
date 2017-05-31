import $ from 'jquery';
import _ from 'underscore';
// can use any name for 'the thing we are importing'. It's just convenient to use the same name as used when it was exported.
import Contact from 'app/models/contact';
import Rolodex from './app/collections/rolodex';


var contactCardTemplate;
var contactDetailsTemplate;

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

var myContact = new Contact(contactData[0]);

var render =  function(contact){
  var jsonContact = contact.toJSON();

  var compiledCardTemplateHTML = $(contactCardTemplate(jsonContact));

  var compiledDetailsTemplateHTML =
  $(contactDetailsTemplate(jsonContact));

  $('#contact-cards').append(compiledCardTemplateHTML);
  $('#contact-details').append(compiledDetailsTemplateHTML);
};

var renderRolodex = function(rolodex) {
  // Clear the unordered list
  $('#contact-cards').empty();
  $('#contact-details').empty();

  // Iterate through the list rendering each Task
  rolodex.each(function(contact) {
    render(contact);
  });
};



var readNewContactForm = function() {
  // Get the values from the fields
  var nameData = $('#name').val();
  var emailData = $('#email').val();
  var phoneData = $('#phone').val();

  clearForm();

  return {
    name: nameData,
    email: emailData,
    phone: phoneData
  };

};

var clearForm = function(){
  $('#name').val('');
  $('#email').val('');
  $('#phone').val('');
};


$(document).ready(function() {
  // compiling the templates
  contactCardTemplate = _.template($('#tmpl-contact-card').html());
  contactDetailsTemplate = _.template($('#tmpl-contact-details').html());

  var rolodex = new Rolodex(contactData);

  renderRolodex(rolodex);

  rolodex.on("update", function() {
    renderRolodex(rolodex);
  });



  $('.btn-save').click(function(event){
    var formData = readNewContactForm();
    var contact = new Contact(formData);

    // Add the Contact to the rolodex
    rolodex.add(contact);
    console.log("new contact:");
    console.log(contact);
  });

  $('.btn-cancel').click(function(event){
    clearForm();
  });

});
