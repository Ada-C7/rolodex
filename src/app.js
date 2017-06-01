import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jQuery';
import _ from 'underscore';
import Contact from './app/models/contact.js';
import ContactList from './app/collections/contact_list.js';
import ContactView from './views/contact_view.js';
import ContactListView from './views/contact_list_view.js';

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



var contactList = new ContactList(contactData);

var renderList = function(contactList){
    $('#contact-cards').empty();

    contactList.each(function(contact){
        var contactView = new ContactView({
            model: contact,
            template: _.template($('#tmpl-contact-card').html()),
            el: 'section'
            // tagName: 'li'
        });
        $('#contact-cards').append(taskView.render().$el);
    });
};


var contactListView = new ContactListView({
    model: contactList,
    template: _.template($('#tmpl-contact-card').html()),
    el: 'section'
});

$(document).ready(function(){
    // contactListView.render();
});
