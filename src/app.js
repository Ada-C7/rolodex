import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view';

// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });

var templateDetails;
var templateCard;

var rawContact = [{
  name: "cyn",
  phone: "123-456-7890",
  email: "cyn@test.com"
}];

var rolodex = new Rolodex(rawContact);

var renderRolodex = function(rolodex) {
  console.log("in renderRolodex");

  $('#contact-cards').empty();

  rolodex.each(function(contactInfo) {
    var contactView = new ContactView ({
      model: contactInfo,
      template: _.template( $('#tmpl-contact-card').html() )
    });

    $('#contact-cards').append(contactView.render().$el);
  });
};

// var renderContact = function(contact){
//   var generatedHTML = templateDetails(contact.toJSON());
//   $('#contact-details').append(generatedHTML);
//
//   var generatedHTML = templateCard(contact.toJSON());
//   $('#contact-cards').append(generatedHTML);
// };

$(document).ready(function() {
  templateCard = _.template($('#tmpl-contact-card').html());
  templateDetails = _.template($('#tmpl-contact-details').html());

  // var contact = new Contact( rawContact );
  // renderContact(contact);
  renderRolodex(rolodex);

});
