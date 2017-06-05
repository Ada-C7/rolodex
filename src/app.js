import $ from 'jquery';
import _ from 'underscore';
import Contact from './models/contact.js';
import Rolodex from './collections/rolodex.js';
import ContactView from './views/contact_view.js';
import RolodexView from './views/rolodex_view.js';

$('#contact-details').hide();

var contactData = [
  {
    name: "Theresa",
    phone: "123-456-7891",
    email: "theresa@yo.com"
  },
  {
    name: "Stella",
    phone: "987-654-3219",
    email: "stella@yo.com"
  }
];

var myRolodex = new Rolodex(contactData);


$(document).ready(function() {
  var myRolodexView = new RolodexView({
    model: myRolodex,
    template: _.template($('#tmpl-contact-card').html()),
    el: 'body'
  });
  myRolodexView.render();
});
