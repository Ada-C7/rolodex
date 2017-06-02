import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact';
import ContactView from '../views/contact_view.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params){
    this.contactTemplate = params.contactTemplate;
    this.listenTo(this.model, "update", this.render);

  },
  render: function() {
    this.$('#contact-cards').empty();

    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: this.contactTemplate
      });
      this.$('#contact-cards').append(contactView.render().$el);
    }.bind(this));
    return this;
  },
  events: {
    'click h3.button.btn-save': 'saveContact',
    'click h3.button.btn-cancel': 'cancelContact',
    'click li.contact-card': 'showContactInformation'
  },
  saveContact: function(event) {
    var formData = this.readContactForm();
    this.model.add(formData);

    return this.render();
  },
  readContactForm: function() {
      var name = $('#name').val();
      var email = $('#email').val();
      var phone = $('#phone').val();

      this.cancelContact();

      return {
        name: name,
        email: email,
        phone: phone
      };
  },
  cancelContact: function(event) {
    $('#name').val('');
    $('#email').val('');
    $('#phone').val('');
  },
  showContactInformation: function(event) {
    alert("Working");
  }
});

export default RolodexView;
