import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from '../views/contact_view.js';
import Contact from '../models/contact.js';

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
        template: that.template
      });
      that.$('#contact-cards').append(contactView.render().el);
    });
    return this;
  },

  events: {
    "click .btn-save": "addContact",
    "click .btn-cancel": "clearForm"
  },

  getFormData: function() {
    var formName = this.$('#name').val();
    this.$("#name").val('');

    var formEmail = this.$('#email').val();
    this.$('#email').val('');

    var formPhone = this.$('#phone').val();
    this.$('#phone').val('');

    return {
      name: formName,
      phone_num: formPhone,
      email: formEmail
    };
  },

  addContact: function() {
    var contact = new Contact(this.getFormData());
    console.log(contact);
    this.model.add(contact);
  },

  clearForm: function() {
    this.$("#name").val('');
    this.$('#email').val('');
    this.$('#phone').val('');
  }
});

export default RolodexView;
