import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import Rolodex from '../collections/rolodex.js';
import ContactView from '../views/contact_view.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    // backbone events, stuff happening to model/Data
    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    // clear unordered list in order to re-render
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
    'click h3.button.btn-save': 'addContact'
  },
  getFormData: function() {
    var formName = this.$("#contact-name").val();
    this.$("#contact-name").val("");
    var formEmail = this.$("#contact-email").val();
    this.$("#contact-email").val("");
    var formPhone = this.$("#contact-phone").val();
    this.$("#contact-phone").val("");
    return {
      name: formName,
      email: formEmail,
      phone: formPhone
    };
  },
  addContact: function(event) {
    console.log("inside add contact");
    var formData = this.getFormData();
    var contact = new Contact(formData);
    this.model.add(contact);
  }
});

export default RolodexView;
