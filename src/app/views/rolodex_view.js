import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.contactTemplate = params.contactTemplate;
    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    console.log("Inside RolodexView.render()");
    var self = this;
    self.$('#contact-cards').empty();
    self.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: self.contactTemplate
      });
      self.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },
  events: {
    'click .btn-save': 'saveContact',
  },
  saveContact: function(event) {
    var formData = this.readContactForm();
    console.log("In save contact, form data: ");
    console.log(formData);
    this.model.add(formData);
  },
  readContactForm: function() {
    var nameData = this.$('input[name=name]').val();
    // this.$('input[name=name]').val();

    var emailData = this.$('input[name=email]').val();
    // this.$('input[name=email]').val();

    var phoneData = this.$('input[name=phone]').val();
    // this.$('input[name=phone]').val();

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
