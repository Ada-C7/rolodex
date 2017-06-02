import _ from 'underscore';
import $ from 'jquery';
import Contact from './app/models/contact';
import Rolodex from './app/collections/rolodex';
import RolodexView from './app/views/rolodex_view.js';

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
  el: 'body'
});


$(document).ready( function(){
  rolodexView.render();
});
