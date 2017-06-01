import _ from 'underscore';
import $ from 'jquery';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact.js';
import Rolodex from 'app/collections/rolodex.js';
import ContactView from 'app/views/contact_view.js';
import RolodexView from 'app/views/rolodex_view.js';


var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});


var someContact = new Contact({
  name: "Aziz Ansari",
  email: 'aziz@mon.org',
  phone: '212-222-2244'

});


var rolodexList = new Rolodex(someContact);

var rolodexView = new RolodexView({
  model: rolodexList,
  template: _.template($("#tmpl-contact-card").html()),
  el: "#application"
});


$(document).ready(function(){
  rolodexView.render();
});
