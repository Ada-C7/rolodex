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
    $('#contact-details').hide();
    var self = this;
    self.$('#contact-cards').empty();

    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: self.contactTemplate
      });
      $('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },
  events: {
    'click .btn-save': 'addContact'
  },
  addContact: function(event) {
    var formData = this.renderContactForm();
    this.model.add(formData);
  },
  renderContactForm: function() {
    // An empty string is falsy in JS, so when changed to undefined, the model
    // defaults will be invoked.
    var name = this.$('#name').val() || undefined;
    var email = this.$('#email').val() || undefined;
    var number = this.$('#phone').val() || undefined;
    this.clearForm();

    return {
      name: name,
      email: email,
      number: number
    };
  },
  clearForm: function() {
    ['#name','#email','#phone'].forEach(function(field) {
      $(field).val('');
    });
    // $('#name').val('');
    // $('#email').val('');
    // $('#phone').val('');
  }
});

export default RolodexView;
