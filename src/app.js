import $ from 'jquery';
import Contact from 'app/models/contact';
import _ from "underscore";
import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view.js';

var contactCardTemplate;
var contactList;

var contactData = [{
  name: "Leonardi Davinci",
  phone: "(111)-111-1111",
  email: "leodavinci@gioconda.com"
},
{
  name: "Sir Walter Scott",
  phone: "(111)-222-2222",
  email: "sirscott@marmion.com"
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

    var contactView = new ContactView({
      model: contact,
      template: _.template($('#tmpl-contact-details').html()),
      tagname: 'li'
    });

    // Then render the TaskView
    // And append the resulting HTML to the DOM.
    // $('.todo-items').append(taskView.render().$el);
  });

};

$(document).ready(function() {

  contactCardTemplate = _.template($('#tmpl-contact-card').html());

  contactList = new Rolodex(contactData);
  contactList.on("update", function(){
    renderList(contactList);
  });

  // contactData.forEach(function(contactData){
  //   var contact = new Contact(contactData);
  //
  //   console.log("Name: " + contact.get("name") +" "+ "Phone Number: " + contact.get("phone") +" "+ "Email: "+ contact.get("email"));

  renderList(contactList);
});
