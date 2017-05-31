import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact.js';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Rolodex from 'app/collections/rolodex.js';
import ContactView from 'app/views/contact_view.js';
import RolodexView from 'app/views/rolodex_view.js';

// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });

var contactsData = [{
  name: "Jill",
  email: "blabla@blabla.com",
  phone: "2394039403"
},
{
  name: "Jackie",
  email: "weeea@blabla.com",
  phone: "2394039403"
},
{
  name: "Your Mom",
  email: "yourmom@blabla.com",
  phone: "1234639403"
}
];

var myContact = new Contact({
  name: "Jill",
  email: "blabla@blabla.com",
  phone: "2394039403"
});

// var render = function(contact) {
//   var templateText = $('#tmpl-contact-card').html();
//
//   // create an underscore template object
//   var templateObject = _.template(templateText);
//
//   // Fill in the ERB wth data from our task
//   var compiledHTML = templateObject(contact.toJSON());
//
// // append the result to the DOM
//   $('#contact-cards').append(compiledHTML);
//   // console.log(compiledHTML);
// };

var renderDetails = function() {
  console.log(this);
  var contact = this.get(id);
  var templateText1 = $('#tmpl-contact-details').html();
  // create an underscore template object
  var templateObject1 = _.template(templateText1);
  // Fill in the ERB wth data from our task
  var compiledHTML1 = templateObject1(contact.toJSON());

  $('#contact-details').html(compiledHTML1);
};


var renderContacts = function(rolodex) {
  $('#contact-cards').empty();
  $('#contact-details').hide();

  rolodex.each(function(contactCard){
    render(contactCard);
    $(".contact-card").click(function() {
      // console.log(contactCard);
      $('#contact-details').show();
      console.log(this);
      renderDetails(this);
    });
  });
};

var myContacts = new Rolodex(contactsData);

// var myContact = new Contact(taskData);

$(document).ready(function() {
  // renderContacts(myContacts);
  // var myContactView = new ContactView({
  //   model: myContact,
  //   template: _.template($('#tmpl-contact-card').html()),
  //   el: 'main'
  // });
  //
  // myContactView.render();

  var myRolodexView = new RolodexView({
    model: myContacts,
    template: _.template($('#tmpl-contact-card').html()),
    el: 'main'
  });

  myRolodexView.render();



});
