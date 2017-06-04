import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact.js';
import Rolodex from './app/collections/rolodex.js';
import ContactView from './app/views/contact_view.js';
import RolodexView from './app/views/rolodex_view.js';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var contactData = [
  {
    name: "Kevin",
    email: "Kevin@kevin.com",
    phone: "253-111-2222"
  }, {
    name: "Kyle",
    email: "kyle@kyle.com",
    phone: "253-222-3333"
  }, {
    name: "April",
    email: "april@april.com",
    phone: "253-333-4444"
  }
];

var myRolodex = new Rolodex(contactData);


$(document).ready(function() {

  $(document).click( function(){
    $('#contact-details').hide();
  });

  var contactListView = new RolodexView({
    model: myRolodex,
    template: _.template($('#tmpl-contact-card').html()),
    detailTemplate: _.template($('#tmpl-contact-details').html()),
    el: "#application",
  });
  // console.log(contactListView);
  contactListView.render();

});
