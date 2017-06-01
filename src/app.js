import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact';
import Rolodex from './app/collections/rolodex';
import ContactView from './app/views/contact_view';


var contactData = [
  {
    name: "Mina",
    email: "Mina@yahoo.com",
    phone: "614-516-2473"
  }, {
    name: "Rosco",
    email: "Rosco@yahoo.com",
    phone: "614-342-4223"
  }
];

var myContactList = new Rolodex(contactData);

var myContact = new Contact({
  name: "Haby",
  email: "haby@gmail.com",
  phone: "614-517-6803"
});

var renderList = function(contactList) {
  $('#contact-cards').empty();

  contactList.each(function(task) {
    var contactView = new ContactView({
      model: Contact,
      template: _.template($('#tmpl-contact-card').html()),
      // tagName: 'li'
    });
    $('#contact-cards').append(contactView.render().el);
  });
};



$(document).ready(function() {
  renderList(myContactList);
  // // select template
  // var templateText = $('#tmpl-contact-card').html();
  // //get compiled template object
  // var templateObject = _.template(templateText);
  // // use template and model data to generate obj into html
  // var compiledHTML = templateObject(myContact.toJSON());
  //
  // $('#contact-cards').append(compiledHTML);
});
