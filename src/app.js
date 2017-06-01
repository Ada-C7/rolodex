import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact.js';
import Rolodex from 'app/collections/rolodex.js';
import ContactView from 'app/views/contact_view.js';


var contactData = [
  {
    name: "John",
    email: "john@example.com",
    phone: "123-456-7890"
  }
];

var myRolodex = new Rolodex(contactData);


// var myContact = new Contact({
//   name: "Sue",
//   email: "sue_shmo86@example.com",
//   phone: "444-555-7777"
// });


var getFormData = function() {
  var formName = $("#name").val();
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

var render = function(contacts) {
  console.log(contacts.toJSON());
  var templateName = $('#tmpl-contact-card').html();

  var templateObject = _.template(templateName);

  _.each(contacts.toJSON(), function(contact) {
    var compiledHTML = $(templateObject(contact));
    $('#contact-cards').append(compiledHTML);

    compiledHTML.find('button.success').click({contactToAdd: contact}, function(params) {
      myRolodex.add(params.data.contactToAdd);
    });
  });
};



var renderList = function(rolodex) {
  $("#contact-cards").empty();

  rolodex.each(function(contact) {
    render(contact);
  });
};

$(document).ready(function() {
  // var myContactView = new ContactView({
  //   model: myContact,
  //   template: _.template($('#tmpl-contact-details').html()),
  //   el: 'main'
  // });
  // myContactView.render();

  render(myRolodex);

  myRolodex.on("update", function() {
    renderList(myRolodex);
  });

  $("#add-contact").click(function() {
    var contact = new Contact(getFormData());

    myRolodex.add(contact);

  });
  
  $("#cancel-contact").click(function(){
    var formName = $("#name").val();
    $("#name").val('');

    var formPhone = $("#phone").val();
    $("#phone").val('');

    var formEmail = $("#email").val();
    $("#email").val('');
  });

  var application = new Application();

  var appView = new ApplicationView({
    el: '#application',
    model: application
  });

});
