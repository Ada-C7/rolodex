import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import _ from 'underscore';
import $ from 'jquery';
// import 'jquery-colpick';
import Contact from 'app/models/contact';


var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});


//===================================

var contactDetailsTemplate;
var contactTemplate;
// var contactTemplate;

var contactData = [{
  name: "Natalia",
  phone: "232332332",
  email: "nat@com"
},
{
  name: "David",
  phone: "322323323",
  email: "dav@com"
}];



var render = function(contact, template){
  var generatedHTML = template(contact.toJSON()); // give template data to generate html
  $('#contact-cards').append(generatedHTML);
};


$(document).ready(function() {
  contactDetailsTemplate = _.template($('#tmpl-contact-details').html());
  contactTemplate = _.template($('#tmpl-contact-card').html());
  var contact = new Contact(contactData[0])
  render(contact, contactTemplate);
  render(contact, contactDetailsTemplate);






});
