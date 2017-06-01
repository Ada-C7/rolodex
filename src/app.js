import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact';

var myContact = new Contact({
  name: "Haby",
  email: "haby@gmail.com",
  phone: "614-517-6803"
});

$(document).ready(function() {
  // select template
  var templateText = $('#tmpl-contact-card').html();
  //get compiled template object
  var templateObject = _.template(templateText);
  // use template and model data to generate obj into html
  var compiledHTML = templateObject(myContact.toJSON());

  $('#contact-cards').append(compiledHTML);
});
