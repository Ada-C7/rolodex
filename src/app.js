import _ from 'underscore';
import $ from 'jquery';
// import Application from 'app/models/application';
// import ApplicationView from 'app/views/application_view';
import Contact from './app/models/contact';
import Rolodex from './app/collections/rolodex';
import RolodexView from './app/views/rolodex_view.js';


// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });


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

var rolodexView = new RolodexView({
  model: rolodex,
  template: _.template($('#tmpl-contact-card').html()),
  el: '#application'
});


$(document).ready( function(){
  rolodexView.render();

});
