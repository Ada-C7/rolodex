// import Application from 'app/models/application';
// import ApplicationView from 'app/views/application_view';
import $ from 'jQuery';
import _ from 'underscore';
import Contact from './app/models/contact.js';
import ContactList from './app/collections/contact_list.js';
import ContactView from './app/views/contact_view.js';
import ContactListView from './app/views/contact_list_view.js';

var contactData = [{
    name: 'Drew',
    phoneNumber: 304,
    email: 'drew@gmail.com'
},
{
    name: 'Dad',
    phoneNumber: 987,
    email: 'bob@gmail.com'
},
{
    name: 'Mom',
    phoneNumber: 609,
    email: 'jan@gmail.com'
},
{
    name: 'Jeff',
    phoneNumber: 215,
    email: 'jeff@gmail.com'
}]

var myContacts = new ContactList(contactData);

var myContactListView = new ContactListView({
    model: myContacts,
    template: _.template($('#tmpl-contact-card').html()),
    el: 'div#application'

})

$(document).ready(function(){
    myContactListView.render();
});
