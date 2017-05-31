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

var contactData = [ {
  name: "A name",
  phone_num: "3057778888",
  email: "email@email.com"
}, {
  name: "Bo",
  phone_num: "2223334444",
  email: "bo@bo.com"
}];

var contactList = new Rolodex(contactData);

var renderList = function(contactList) {
  $('#contact-cards').empty();
  contactList.each(function(contact) {
    var contactView = new ContactView({
      model: contact,
      template: _.template($('#tmpl-contact-card').html())
    });
    $('#contact-cards').append(contactView.render().el);

  });
};


var getFormData = function() {
  var formName = $('#name').val();
  $("#name").val('');

  var formEmail = $('#email').val();
  $('#email').val('');

  var formPhone = $('#phone').val();
  $('#phone').val('');

  return {
    name: formName,
    phone_num: formPhone,
    email: formEmail
  };

};

$(document).ready(function() {
  renderList(contactList);

  contactList.on("update",
  function() {
    renderList(contactList);
  });

  $(".btn-save").click(function() {
    var contact = new Contact(getFormData());
    contactList.add(contact);
  });
});
