import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Rolodex from '../collections/rolodex.js';
import ContactView from './contact_view.js';


const RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.contactTemplate = params.contactTemplate
    this.listenTo(this.model, "update", this.render);
  },

  events: {
    'click .btn-save': 'addContact',
    'click .btn-cancel': 'clear',
  },

  addContact: function(event) {
    var form = this.newContacts();
    console.log(form)
    this.model.add(form)
  },

  clear: function() {
    $('#name').val('');
    $('#email').val('');
    $('#phone').val('');
  },

  newContacts: function() {
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    this.clear();

    var form = {};
    //do i need to put stuff here to check if it's empty?
    return form
  },


  render: function() {
    this.$("#contact-cards").empty();
    const self = this;
    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: self.template,
        contactTemplate: self.contactTemplate,
        tagName: 'li',
        className: "contact-item column column-block",
      });
      self.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },


});

export default RolodexView
