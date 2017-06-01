import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view.js';
import Contact from '../models/contact.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.listenTo(this.model, "update", this.render);
    // listenTo contact triggered
  },
  render: function() {
    // alert('render me bb');
    this.$('#contact-cards').empty();
    var that = this;
    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: that.template
      });
      that.$('#contact-cards').append(contactView.render().el);
    });
  },
  events: {
    "click .btn-save" : "saveContact",
    "click .btn-cancel" : "cancel"
  },
  getFormData: function() {
    var inputName = this.$("input[name='name']");
    var inputEmail = this.$("input[name='email']");
    var inputPhone = this.$("input[name='phone']");
    console.log(inputName + inputPhone + inputEmail);

    if (inputName.val()) {
      var formName = inputName.val();
    }
    inputName.val('');

    if (inputEmail.val()) {
      var formEmail = inputEmail.val();
    }
    inputEmail.val('');

    if (inputPhone.val()) {
      var formPhone = inputPhone.val();
    }
    inputPhone.val('');

    return {
      name: formName,
      email: formEmail,
      phone: formPhone
    };
  },
  saveContact: function() {
    var contact = new Contact(this.getFormData());
    this.model.add(contact);
  },
  cancel: function() {
    this.$("input[name='name']").val('');
    this.$("input[name='email']").val('');
    this.$("input[name='phone']").val('');
  }
});

export default RolodexView;
