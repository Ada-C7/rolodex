import $ from 'jquery';
import _ from 'underscore';
import Contact from './models/rolodex.js';
import ContactList from './collections/contact_list.js';
import ContactView from './views/contact_view.js';

var contactData = [
  {
    name: 'Olivia Mendez',
    email: 'ssecretsharer@gmail.com',
    phone: '2068411360'
  }, {
    name: 'Malaki Stahl',
    email: 'skujellifeddy@gmail.com',
    phone: '2068412974'

  }
];

var myContactList = new ContactList(contactData);

//function that would allow us to save data into the contact list but not necc associated directly with model functionality/actions/code
var getFormData = function() {
  var formName = $("#name").val();
  $("#name").val('');

  var formEmail = $("#email").val();
  $("#email").val('');

  var formPhone= $("#phone").val();
  $("#phone").val('');

  return {
    name: formName,
    email: formEmail,
    phone: formPhone
  };
};

// var render = function(contact) {
//   // Get the Template using jQuery
//   var templateText = $('#contactListTemplate').html();
//
//   // Create an Underscore Template Object
//   var templateObject = _.template(templateText);
//
//   // Fill in the ERB with data from
//   // our contact.
//   //console.log(templateObject(contact.toJSON()));
//   var compiledHTML = $(templateObject(contact.toJSON()));

  // Append the result to the DOM
  // $('.todo-items').append(compiledHTML);

//   compiledHTML.find('button.alert').click({contactToRemove: contact}, function(params){
//     myContactList.remove(params.data.contactToRemove);
//   });
//
};


$(document).ready(function() {
  renderList(myContactListView);

  var myContactListView = new
  ContactListView({
    model: contactList,
    template:
    _.template($('#contactListTemplate').html()),
    el: '#application'
  });
  myContactListView.render();
});

myContactList.on("update", function() {
  renderList(myContactList);
});

$("#add-contact").click(function() {
  // Creating a new Contact
  // With the form data
  var contact = new Contact(getFormData());

  // Add it to the list
  myContactList.add(contact);

  // re-render the list
  // renderList(myContactList);
});

});
