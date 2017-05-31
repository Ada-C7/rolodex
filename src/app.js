import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact';

// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });

// var templateContact;
var templateCard;

var rawContact = {
  name: "cyn",
  phone: "123-456-7890",
  email: "cyn@test.com"
};

var renderContact = function(contact){
  var generatedHTML = templateCard(contact.toJSON());
  $('#contact-details').append(generatedHTML);
};

$(document).ready(function() {
  // templateNameObj = _.template(template_name);
  templateCard = _.template($('#tmpl-contact-details').html());

  var contact = new Contact( rawContact );
  renderContact(contact);
});
