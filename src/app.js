import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import $ from 'jquery';
import _ from 'underscore';

import Contact from './app/models/contact.js';
import Rolodex from './app/collections/rolodex.js';
import ContactView from './app/views/contact_view.js';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var contactData = [
  {
    name: "Aurora",
    phoneNumber: "555-555-555",
    email: "fake@fakey.com"
  },
  {
    name: "Felix",
    phoneNumber: "666-666-6666",
    email: "supafake@fakey.com"
  }
];

var myRolodex = new Rolodex(contactData);

var getFormData = function() {
  var formName = $("#name").val();
  $("#name").val('');
  var formPhone = $("#phone").val();
  $("#phone").val('');
  var formEmail = $("#email").val();
  $("#email").val('');

  return {
    name: formName,
    phoneNumber: formPhone,
    email: formEmail
  };
};

var renderSmall = function(contact) {
  var templateText = $('#tmpl-contact-card').html();
  var templateObject = _.template(templateText);
  var compiledHTML = $(templateObject(contact.toJSON()));

  $('#contact-cards').append(compiledHTML);

  compiledHTML.click({contact: contact}, function(params) {
    renderSingleContact(params.data.contact);
  });
};

var renderList = function(rolodex) {
  $("#contact-cards").empty();
  rolodex.each(function(contact) {
    var contactView = new ContactView({
      model: contact,
      template: _.template($("#tmpl-contact-card").html())
    });
    $("#contact-cards").append(contactView.render().el);
  });
};


$(document).ready(function() {
  renderList(myRolodex);

  myRolodex.on("update", function() {
    renderList(myRolodex);
  });

  $("#create-contact").click(function() {
    var newContact = new Contact(getFormData());
    myRolodex.add(newContact);
  });

  $(".btn-cancel").click(function() {
    $("#name").val('');
    $("#phone").val('');
    $("#email").val('');
  });

});
