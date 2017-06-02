import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';
import Rolodex from 'app/Collections/rolodex';
import ContactView from 'app/models/contact_view.js';


var AppView = Backbone.View.extend({
var readContactCard = function(){

  var nameData = $('#name').val();
  $('#name').val('');

  var emailData = $('#email').val();
  $('#email').val('');

  var formData = {};
  if (nameData && emailData != ""){
    return formData;
  }

  $(document).ready(function(){

    contactTemplate = _.template($('#tmpl-contact-details').html());
    Contact = new Contact()
    //rolodex template missing

    var ContactView = new ContactView({
      contactTemplate: contactTemplate,
      model: ContactView,
      el: $('main')

    });
    ContactView.render();
  })
