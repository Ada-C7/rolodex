import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.contactTemplate;
    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    var self = this;
    self.$('#contact-cards').empty();
    self.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: self.template
      });
      self.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },
  event: {
    'click .btn-save': 'addContact',
    'click .btn-cancel': 'clearForm'
  },
  addContact: function(event) {
    var formData = this.readContactForm();
    this.model.add(formData);
  },
  readContactForm: function() {
    var nameData = this.$('#name').val();
    this.$('#name').val();

    var emailData = this.$('#email').val();
    this.$('#email').val();

    var phoneData = this.$('#phone').val();
    this.$('#phone').val();

    var formData = {};
    if (nameData && nameData != "") {
      formData["name"] = nameData;
    }
    if (emailData && emailData != "") {
      formData["email"] = emailData;
    }
    if (phoneData && phoneData != "") {
      formData["phone"] = phoneData;
    }
    return formData;
  }
});

export default RolodexView;
