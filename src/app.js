import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact';
import Rolodex from './app/collections/rolodex';


var contactData = [
  {
    name: "Mina",
    email: "Mina@yahoo.com",
    phone: "614-516-2473"
  }, {
    name: "Rosco",
    email: "Rosco@yahoo.com",
    phone: "614-342-4223"
  }
];

var myContactList = new Rolodex(contactData);

var myContact = new Contact({
  name: "Haby",
  email: "haby@gmail.com",
  phone: "614-517-6803"
});

var renderList = function(contactList) {
  $('#contact-cards').empty();

  contactList.each(function(task) {
    
  });
};



$(document).ready(function() {
  // select template
  var templateText = $('#tmpl-contact-card').html();
  //get compiled template object
  var templateObject = _.template(templateText);
  // use template and model data to generate obj into html
  var compiledHTML = templateObject(myContact.toJSON());

  $('#contact-cards').append(compiledHTML);
});
