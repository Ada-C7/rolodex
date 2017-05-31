import _ from 'underscore';
import $ from 'jquery';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from './app/models/contact';
import Rolodex from './app/collections/rolodex';


var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

// var newContactData = {
//   name: 'Dr. Seuss',
//   email: 'thing1@catinthehat.net',
//   phone: '888-888-8888'
// };
//
// var newContact = new Contact(newContactData);

var newContactData = [{
  name: 'Dr. Seuss',
  email: 'thing1@catinthehat.net',
  phone: '888-888-8888'
},
{
  name: 'Albert Einstein',
  email: 'smahtguy@relativity.net',
  phone: '999-999-9999'
},
{
  name: 'Amelia Earhart',
  email: 'breezy@yahoo.com',
  phone: '777-777-7777'
}];

var rolodex = new Rolodex(newContactData)

var render = function(contact) {
  var templateText = $('#tmpl-contact-card').html();
  var templateObject = _.template(templateText);
  var compiledHTML = templateObject(contact.toJSON());
  $('#contact-cards').append(compiledHTML);
};

var renderRolodex = function(rolodex) {
  $('#contact-cards').empty();
  rolodex.each(function(contact) {
    render(contact);
  });
};

$(document).ready( function(){
  renderRolodex(rolodex);

  rolodex.on('update', function() {
    renderRolodex(rolodex);
  });
});
