import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact.js';
import Rolodex from 'app/collections/rolodex.js';


var contactData = [
  {
    name: "John",
    email: "john@example.com",
    phone: "123-456-7890"
  }
];

var myRolodex = new Rolodex(contactData);


var myContact = new Contact({
  name: "Sue",
  email: "sue_shmo86@example.com",
  phone: "444-555-7777"
});

// var myOtherContact = new Contact({
//   name: "sadlkf",
//   email: "asdfdsafdsasdafasdfsad@example.com",
//   phone: "444-555-7077"
// });


var getFormData = function() {
  var formName = $("name").val();
  $("#name").val('');

  var formEmail = $("#email").val();
  $("#email").val('');

  var formPhone = $("#phone").val();
  $("#phone").val('');

  return {
    name: formName,
    email: formEmail,
    phone: formPhone
  };
};

var render = function(contact) {
  var templateName = $('#tmpl-contact-card').html();

  var templateObject = _.template(templateName);

  var compiledHTML = (templateObject(contact.toJSON()));

  $('#contact-cards').append(compiledHTML);

  compiledHTML.find('button.success').click({contactToAdd: contact}, function(params) {
    myRolodex.remove(params.data.contactToAdd);
  });

};

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});


var renderList = function(rolodex) {
  $("#contact-cards").empty();

  rolodex.each(function(contact) {
    render(contact);
  });
};

$(document).ready(function() {
  render(myContact);
  // render(myOtherContact);

  $("#add-contact").click(function() {
    var contact = new Contact(getFormData());

  });
});
