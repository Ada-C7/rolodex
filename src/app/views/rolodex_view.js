import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import ContactView from './contact_view.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    this.$('#contact-cards').empty();

    var that = this;
    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: that.template,
        tagName: 'li'
      });
      that.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },
  events: {
    'click h3.btn-save': 'addContact',
    'click h3.btn-cancel': 'clearForm'
  },
  clearForm: function() {
    this.$('#name').val('');
    this.$('#email').val('');
    this.$('#phone').val('');
  },
  getFormData: function() {
    var formName = this.$('#name').val();
    var formEmail = this.$('#email').val();
    var formPhone = this.$('#phone').val();
    // this.$('#name').val('');
    // this.$('#email').val('');
    // this.$('#phone').val('');
    this.clearForm();
    return {
      name: formName,
      email: formEmail,
      phone: formPhone
    };
  },
  addContact: function(e) {
    var contactData = this.getFormData();
    var contact = new Contact(contactData);
    this.model.add(contact);
  }
});

export default RolodexView;
