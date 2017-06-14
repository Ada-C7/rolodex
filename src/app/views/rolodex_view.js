import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {

    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    this.listElement = this.$('#contact-cards');

    this.cardList = [];

    this.model.forEach(function(contact){
      this.addContact(contact);
    }, this);

    this.input = {
      name: this.$('.columns input [name = "name"]'),
      phone: this.$('.columns input [phone = "phone"]'),
      email: this.$('columns input[email = "email"]')
    };

    this.listenTo(this.model, "update", this.render);
    this.listenTo(this.model, "add", this.addContact);
  },

  render: function(){
    this.listElement.empty();

    this.cardList.forEach(function(card){
      card.render() ;

      this.listElement.append(card.$el);
    }, this);
  },


  events: {
    'click .btn-cancel': 'clearInput',
    'click .btn-save': 'createContact',
    'click .contact-card': 'viewContact'
  },

  clearInput: function(event){
    this.input.name.val('');
    this.input.phone.val('');
    this.input.email.val('');
  },

  createContact: function(event){
    event.preventDefault();
    var contact = new Contact(this.getInput());
    this.model.add(contact);
    this.clearInput();
  },

  getInput: function(){
    var contact = {
      name: this.input.name.val(),
      phone: this.input.phone.val(),
      email: this.input.email.val()
    };
    return contact;
  },

  addContact: function(contact){
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });
    this.cardList.push(card);
  },

});

export default RolodexView
