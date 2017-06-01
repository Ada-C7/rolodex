import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view.js';
import ContactListView from 'app/views/contact_list_view.js';

var contactCardTemplate;
var contactList;

var contactData = [{
  name: "Sofia",
  email: "sofia@adadevelopers.com",
  phone: "222-222-2222"
},
{
  name: "Ting",
  email: "ting@adadevelopers.com",
  phone: "222-222-2222"
},
{
  name: "ada",
  email: "ada@adadevelopers.com",
  phone: "222-222-2222"
}];


// var render = function(myContact){
//   var jsoncontactCard = myContact.toJSON();
//   var generatedHTML = contactCardTemplate(jsoncontactCard);
//
//   $('#contact-cards').append(generatedHTML);
// };


// var renderList = function() {
//   $('#contact-cards').empty();
//   contactList.each(function(contact) {
//     // render(contact);
//     // Create a new TaskView with the model & template
//     var contactView = new ContactView({
//       model: contact,
//       template: _.template($('#tmpl-contact-card').html()),
//       tagname: 'li'
//     });
//     // Then render the TaskView
//     // And append the resulting HTML to the DOM.
//     var target = $('#contact-cards')
//     console.log(target);
//
//     contactView.render();
//     console.log(contactView.$el);
//
//     target.append(contactView.$el);
//   });
// };

$(document).ready(function() {

  contactCardTemplate = _.template($('#tmpl-contact-card').html());

  contactList = new Rolodex(contactData);
  // renderList(contactList);

  // contactList.on("update", function(){
  //   renderList(contactList);
  // });
  // renderList(contactList);
  var contactListViewParams = {
    contactTemplate: contactCardTemplate,
    model: contactList,
    el: $('#application')
  };

  var contactListView = new ContactListView(contactListViewParams);

  contactListView.render();

  // contactData.forEach(function(contactData){
  //   var contact = new Contact(contactData);
  //   console.log(contact.get("name") +  " : " + contact.get("email") + contact.get("phone"));
  //
  //   render(contact);
});
