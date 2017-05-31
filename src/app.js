import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view.js';

var contactCardTemplate;
var contactList;

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
  name: "Emma",
  phone: "(416) 733-2223",
  email: "Emma@adadevelopersacademy.org"
}];

var render = function(contact) {
  var jsonContact = contact.toJSON();
  var generatedHTML = contactCardTemplate(jsonContact);

  $('#contact-cards').append(generatedHTML);
};

var renderList = function(contactList) {
  // Clear the unordered list
  $('#contact-cards').empty();

  // Iterate through the list rendering each Task
  contactList.each(function(contact) {
    render(contact);

    // Create a new TaskView with the model & template
    var contactView = new ContactView({
      model: Contact,
      template: _.template($('#tmpl-contact-details').html()),
      tagName: 'li'
    });

    // Then render the TaskView
    // And append the resulting HTML to the DOM.
    // $('.todo-items').append(taskView.render().$el);
  });
};

$(document).ready(function() {
  contactCardTemplate = _.template($('#tmpl-contact-card').html());
  contactList = new Rolodex(contactData);

  renderList(contactList);
  contactList.on("update", function() {
    renderList(contactList);
  });


  // contactData.forEach(function(contactData) {
  //   var contact = new Contact(contactData);
  //   console.log("Name: " + contact.get("name") +  " Phone Number:" + contact.get("phone") + " Email: " + contact.get("email"));
  //   render(contact);
  // });

});
