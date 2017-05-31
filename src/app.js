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





$(document).ready(function() {
  // compiling the template
  contactCardTemplate = _.template($('#tmpl-contact-card').html());

  contactDetailsTemplate = _.template($('#tmpl-contact-details').html());

  // render(myContact);

  var rolodex = new Rolodex(contactData);

  console.log(rolodex);
  renderRolodex(rolodex);



});
