import _ from 'underscore';
import $ from 'jquery';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact.js';
import Rolodex from 'app/collections/rolodex.js';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var getContactInfo = function() {

};

//create a collection for storing contacts
var rolodexList = new Rolodex();

$('.btn-save').click(function(){
  //get data from form
  //create Contact
  //add to list
})

//render one contact
var renderContact = function(contact) {

};

var renderRolodex = function(contactList) {
  contactList.each(function(contact){
    renderContact(contact);
  })
};

$(document).ready(function(){

});
