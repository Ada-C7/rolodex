import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';

import ContactView from '../src/app/views/contact_view.js';
import RolodexView from 'app/views/rolodex_view';

var contactDetailTemplate;
var contactTemplate;
var contactData = [
{
  name: "George Weasley",
  email: "bertiebotts@gmail.com",
  phone: "206-call-gorg"
},
{
  name: "Fred Weasley",
  email: "everyflavorbean@gmail.com",
  phone: "206-ima-fred"
}
]

var rolodex = new Rolodex(contactData);

$(document).ready(function() {
  contactDetailTemplate = _.template($('#tmpl-contact-details').html());
  contactTemplate = _.template($('#tmpl-contact-card').html());

  var rolodexView = new RolodexView({
    contactTemplate: contactTemplate,
    detailTemplate: contactDetailTemplate,
    model: rolodex,
    el: $('body')
  });

  rolodexView.render();
});
