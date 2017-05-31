// import Application from 'app/models/application';
// import ApplicationView from 'app/views/application_view';
// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });

import $ from 'jquery';
import _ from 'underscore';
// Link to contact model
import Contact from './app/models/contact.js';

// Creating instance of Contact model with static data
var myContact = new Contact({
  name: "Rana Sulaiman",
  Email: "rs_sulaiman@yahoo",
  Phone: '435-333-777'
});

var render = function(contact){
  // selecting everything in script tag and assigning it to var and convert it to jq so we can use html function
  var templateText = $('#tmpl-contact-card').html();

  // Create a template object
  var templateObject = _.template(templateText);

  // Complile a template object/in trek we serialize the data because we were sending it to API
  // This is closure, we are passing the function as an argument
  var compiledHTML = templateObject(contact.toJSON());

  // Append result to the DOM
$('#contact-cards').append(compiledHTML);
};



$(document).ready(function() {
  console.log(myContact);
  render(myContact);

});
