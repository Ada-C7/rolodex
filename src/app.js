import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';
import Rolodex from './app/collections/rolodex';

import RolodexView from './app/views/rolodex_view.js';

var contactTemplate;

var contactData = [
  {
    name: "TJ O'Pootertoot",
    email: "tj@pootertoots.com",
    phone: "666-666-6666"
  }, {
    name: "Francesca Fernandez",
    email: "francesca@gmail.com",
    phone: "555-555-5555"
  }
];

var newContact = new Contact ({
  name: "Fabio McMuffin",
  email: "mcmuffin@yahoo.com",
  phone: "111-111-1111"
});


// var render = function(contact) {
//   var generatedHTML = $(contactTemplate(contact.toJSON()));
//
//   $('#contact-cards').append(generatedHTML);
//
// generatedHTML.find("button.alert").click({task: task}, function(params) {
//   taskList.remove(params.data.task);
// });
// };


$(document).ready(function() {

  contactTemplate = _.template($("#tmpl-contact-card").html());

  var  rolodex = new Rolodex(contactData);

  var rolodexView = new RolodexView ({
    template: contactTemplate,
    model: rolodex,
    el: $('body')
  });


  rolodexView.render();

  // var renderRolodex = function(rolodex) {
  //   // Clear the unordered list
  //   $('#contact-cards').empty();
  //
  //   rolodex.each(function(contact) {
  //     render(contact);
  //   });
  // };
  //
  // renderRolodex(rolodex);
  //
  //
  //
  rolodex.on("update", function() {
    rolodexView.render();
  });
  rolodex.add(newContact);

});
