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

var readNewContactForm = function(){
  console.log("make form data into object");

  var name = $("#name").val();
  // this is what deletes the users input from the text field
  $("#name").val("");

  var email = $('#email').val();
  $('#email').val("");

  var phone = $('#phone').val();
  $('#phone').val("");

  return {
    name: name,
    phone: phone,
    email: email
  };
};

var contacts = [{
  name: "cyn",
  phone: "123-456-7890",
  email: "cyn@test.com"
}];

var rolodex = new Rolodex(contacts);

var renderRolodex = function(rolodex) {
  // console.log("in renderRolodex");
  $('#contact-cards').empty();

  rolodex.each(function(contactInfo) {
    var contactView = new ContactView ({
      model: contactInfo,
      template: templateCard
    });

    $('#contact-cards').append(contactView.render().$el);
  });
};


$(document).ready(function() {
  templateCard = _.template($('#tmpl-contact-card').html());
  templateDetails = _.template($('#tmpl-contact-details').html());

  renderRolodex(rolodex);

  rolodex.on("update", function() {
    renderRolodex(rolodex);
  });

  $(".button.btn-save").click( function(event) {
    // console.log("button save button has been clicked!");
    var contact = new Contact ( readNewContactForm() );
    rolodex.add(contact);
  });

});
