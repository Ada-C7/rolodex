import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import Rolodex from '../collections/rolodex.js';
import ContactView from './contact_view.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    this.$('#contact-cards').empty();
    var that = this;

    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: that.template,
        tagName: "li"
      });
      that.$('#contact-cards').append(contactView.render().el);
      console.log("Render" + contact.attributes);
    });


    return this;
  },

  events: {
    'click .btn-save': 'addContact',
    'click .btn-cancel': 'cancelContact',
  },

  getFormInfo: function() {
    var formName = this.$('input[name=name]').val();
    this.$('input[name=name]').val('');

    var formPhone = this.$('input[name=phone]').val();
    this.$('input[name=phone]').val('');

    var formEmail = this.$('input[name=email]').val();
    this.$('input[name=email]').val('');

    return {
      name: formName,
      phone: formPhone,
      email: formEmail
    };
  },

  addContact: function() {
    var contact = new Contact( this.getFormInfo());
    this.model.add(contact);
  },

  cancelContact: function() {
    this.$('input[name=name]').val('');
    this.$('input[name=phone]').val('');
    this.$('input[name=email]').val('');
  },


});

export default RolodexView;
