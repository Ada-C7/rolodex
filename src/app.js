import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact.js';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });

var myContact = new Contact({
  name: "Jill",
  email: "blabla@blabla.com",
  phone: "2394039403"
});

var render = function(contact) {
  var templateText = $('#tmpl-contact-card').html();

  // create an underscore template object
  var templateObject = _.template(templateText);

  // Fill in the ERB wth data from our task
  var compiledHTML = templateObject(contact.toJSON());

// append the result to the DOM
  $('#contact-cards').append(compiledHTML);
  // console.log(compiledHTML);
};

$(document).ready(function() {
  render(myContact);

});
