import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact.js';
import ContactList from 'app/collections/rolodex.js';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var contactData = [
  {
    name: "Kevin",
    email: "Kevin@kevin.com",
    phone: "253-111-2222"
  }, {
    name: "Kyle",
    email: "kyle@kyle.com",
    phone: "253-222-3333"
  }, {
    name: "April",
    email: "april@april.com",
    phone: "253-333-4444"
  }
];

var myContactList = new ContactList(contactData);


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

var render = function(contact){

    //get template using jquery
    var templateText = $('#tmpl-contact-card').html();

    // Create and underscore template object

    var templateObject = _.template(templateText);

    //Fill in the ERB with data from our task.

    var compliledHTML = $(templateObject(contact.toJSON()));

  //append the results to out DOM
    $('#contact-cards').append(compliledHTML);

    // compliledHTML.find("button.alert").click({contact: contact}, function(event) {
    // myTaskList.remove(event.data.contact);
  // });
};



var renderList = function(taskList) {
  $("#contact-cards").empty();
  taskList.each(function(task) {
    render(task);
  });
};


$(document).ready(function() {

  myContactList.on("update", function() {
    renderList(myContactList);
  });
  // render(myTask);
  // render(myOtherTask);
  $(".btn-save").click(function() {
  //
  //   var task = new Task(getFormData());
    // var formData = getFormData();
    var newContact = new Contact(getFormData());
    myContactList.add(newContact);
  // render(newTask);
  // render List(myContactList);
});
  // myContactList.each(function(task) {
  //     render(task);
  //   });
  renderList(myContactList);
});
