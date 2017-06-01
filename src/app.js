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

var contactList = new Rolodex(contactData);

var getFormData = function(){
    var formName = $('#name').val();
    $('#name').val('');
    var formPhone = $('#phone').val();
    $('#phone').val('');
    var formEmail = $('#email').val();
    $('#email').val('');

    return {
        name: formName,
        phoneNumber: formPhone,
        email: formEmail
    };

};

// var render = function(contact){
//     var templateText = $('#tmpl-contact-card').html();
//     var templateObject = _.template(templateText);
//
//     var compiledHTML = $(templateObject(contact.toJSON()));
//
//     $('#contact-cards').append(compiledHTML);
// }

var renderList = function(contactList){
    $('#contact-cards').empty();
    contactList.each(function(contact){
        render(contact);
    });
};

$(document).ready(function(){
    renderList(contactList);

    $('#btn-save').click(function() {
        console.log('helllooooooo');
        var contact = new Contact(getFormData());
        contactList.add(contact);
    });

    contactList.on('update', function(){
        renderList(contactList);
    });
});
