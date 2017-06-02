import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view.js';
import ContactListView from 'app/views/contact_list_view.js';

var contactCardTemplate;
var contactList;
var detailsCardTemplate;

var contactData = [{
  name: "Ada Lovelace",
  phone: "(416) 733-2221",
  email: "Ada@adadevelopersacademy.org"
},
{
  name: "Ting Wong",
  phone: "(416) 733-2222",
  email: "Ting@adadevelopersacademy.org"
},
{
  name: "Emma Lovelace",
  phone: "(416) 733-2223",
  email: "Emma@adadevelopersacademy.org"
}];

$(document).ready(function() {
  contactCardTemplate = _.template($('#tmpl-contact-card').html());
  detailsCardTemplate = _.template($('#tmpl-contact-details').html());
  contactList = new Rolodex(contactData);

  var clvParams = {
    contactTemplate: contactCardTemplate,
    detailsTemplate: detailsCardTemplate,
    model: contactList,
    el: $('body')
  };
  var contactListView = new ContactListView(clvParams);

contactListView.render();

});
