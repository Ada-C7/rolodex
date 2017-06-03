import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact';
import Rolodex from './app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

var contactData = [
  {
    name: 'Brendon Small',
    email:'makin_movies1996@gmail.com',
    phone: "222-2222"
  },
  {
    name: 'Coach John McGuirk',
    email:'not_a_gym_teacher@gmail.com',
    phone: "333-3333"
  },
  {
    name: 'Melissa Robbins',
    email:'happy_method_actor@gmail.com',
    phone: "444-4444"
  }
];

$(document).ready(function() {
  var contactTemplate = _.template($('#tmpl-contact-card').html());
  var rolodex = new Rolodex(contactData);

  var contactInformationTemplate = _.template($('#tmpl-contact-details').html());


  var rolodexView = new RolodexView({
    contactTemplate: contactTemplate,
    contactInformationTemplate: contactInformationTemplate,
    model: rolodex,
    el: $('body')
  });

  rolodexView.render();
});
