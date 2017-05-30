import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact.js';

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

var renderCard = function(contact){
  var templateText = $('#tmpl-contact-card').html();
  var templateObject = _.template(templateText);
  var compiledHTML = $(templateObject(contact.toJSON()));
  $('#contact-cards').append(compiledHTML);
};

$(document).ready(function() {
  renderCard(newContact);

});
