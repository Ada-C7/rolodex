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

var individualContactData = {
  name: "Create a Model!",
  email: "",
  phone: ""
};
var myContact = new Contact(individualContactData);

var getFormData = function() {
  var formName = $("#name").val();
  $("#name").val('');

  var formEmail = $("#email").val();
  $("#email").val('');

  var formPhone= $("#phone").val();
  $("#phone").val('');
  // // Get Checkbox Checked
  // var formCompleted = $('#completed-checkbox').is(":checked");
  // // Clear Checkbox
  // $('#completed-checkbox').prop('checked', false);

  return {
    name: formName,
    email: formEmail,
    phone: formPhone
  };
};

var render = function(task) {
  // Get the Template using jQuery
  var templateText = $('#contactListTemplate').html();

  // Create an Underscore Template Object
  var templateObject = _.template(templateText);

  // Fill in the ERB with data from
  // our task.
  //console.log(templateObject(task.toJSON()));
  var compiledHTML = $(templateObject(contact.toJSON()));

  // Append the result to the DOM
  // $('.todo-items').append(compiledHTML);

  compiledHTML.find('button.alert').click({contactToRemove: contact}, function(params){
    myContactList.remove(params.data.contactToRemove);
  });

};


var renderList = function(contactList) {
  // Clear the list
  $(".contacts").empty();

  // Loop Through rendering each task
  contactList.each(function(contact) {
    // Create a TaskView
    var contactView = new ContactView({
      model: contact, // get model
      // the template
      template: _.template( $('#contactListTemplate').html() )
    });
    // Render the View
    // Then append the result
    // to the DOM
    $(".contacts").append(contactView.render().el);
  });
};

$(document).ready(function() {
  renderList(myContactList);

  var myContactListView = new
  ContactListView({
    model: contactList,
    template:
    _.template($('#contactItemTemplate').html()),
    el: '#application'
  });
  myContactListView.render();
});

myContactList.on("update", function() {
  renderList(myContactList);
});

$("#add-contact").click(function() {
  // Creating a new Task
  // With the form data
  var task = new Contact(getFormData());

  // Add it to the list
  myContactList.add(contact);

  // re-render the list
  // renderList(myTaskList);
});

});
