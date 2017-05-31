import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jQuery';
import _ from 'underscore';
import Contact from './app/models/contact.js';
import Rolodex from './app/collections/rolodex.js'

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var contactData = [{
    name: 'Drew',
    phoneNumber: '304',
    email: 'drew@gmail.com'
},
{
    name: 'Dad',
    phoneNumber: '987',
    email: 'bob@gmail.com'
}]

var contactList = new Rolodex(contactData);


var render = function(contact){
    var templateText = $('#tmpl-contact-card').html();
    var templateObject = _.template(templateText);

    var compiledHTML = $(templateObject(contact.toJSON()));

    $('#contact-cards').append(compiledHTML);
}


$(document).ready(function(){
    console.log('!!!!!!!!!!!************!!!!!!!!!!');
    console.log(contactList);
    // render(myContact);
    contactList.each(function(contact){
        render(contact);
    });
});
