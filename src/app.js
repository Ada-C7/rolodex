import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import _ from 'underscore';
import $ from 'jquery';
// import 'jquery-colpick';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view.js';
import ContactListView from 'app/views/contact_list_view';


var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var contactTemplate;

var contactData = [{
  name: "Natalia",
  phone: "232332332",
  email: "nat@com"
},
{
  name: "David",
  phone: "322323323",
  email: "dav@com"
},
{
  name: "Name",
  phone: "12345766",
  email: "a123@com"
}];

var contactList;

$(document).ready(function() {
  contactTemplate = _.template($('#tmpl-contact-card').html());
  contactList = new Rolodex(contactData);

  var contactListView = new ContactListView({
    contactTemplate: contactTemplate,
    model: contactList,
    el: $('#application')
  });

  contactListView.render();

  window.onclick = function(event) {
    if (event.target.nodeName == "BODY") {
      $('#contact-details').hide();
    }
  }

});
