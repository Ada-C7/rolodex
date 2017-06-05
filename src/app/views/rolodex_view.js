import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view.js';

const ApplicationView = Backbone.View.extend({
  initialize: function(params) {
      this.template = params.template;
      this.contactTemplate = params.contactTemplate;
      this.listenTo(this.model, "update", this.render);
    },

    render: function() {
      this.$('#contact-cards').empty();
      var that = this;
      this.model.each(function(contact) {
        var contactView = new ContactView({
          model: contact,
          template: that.template,
          contactTemplate: that.contactTemplate,
          className: "contact-card small-11 medium-4 large-2 medium-offset-1 columns end",
          tagName: 'li'
        });
        that.$('#contact-cards').append(contactView.render().$el);
      });
      return this;
    },
    events: {
      'click .btn-save': 'addContact',
      'click .btn-cancel': 'clearForm',
      'click': 'hideInfo'
    },

    clearForm: function() {
      $('#name').val('');
      $('#email').val('');
      $('#phone').val('');
    },

    addContact: function(event) {
      var formData = this.newContactForm();
      console.log(formData);
      this.model.add(formData);
    },

    hideInfo: function() {
      $("#contact-details").hide();
    },

    newContactForm: function() {
      var formName = $('#name').val();
      var formEmail = $('#email').val();
      var formPhone = $('#phone').val();
      this.clearForm();

      var formData = {};
      if (formName && formName != "") {
        formData["name"] = formName
      }
      if (formEmail && formEmail != "") {
        formData["email"] = formEmail
      }
      if (formPhone && formPhone != "") {
        formData["phone"] = formPhone
      }
      return formData;
    }
});

export default ApplicationView;
