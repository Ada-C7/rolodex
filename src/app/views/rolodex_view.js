import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
// import Rolodex from '../collections/rolodex';
import ContactView from './contact_view';
// import Contact from '../models/contact';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    // console.log(params);
    // console.log(this);
    this.template = params.contactTemplate;

    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    // console.log("Inside rolodex.render()");
    var self = this;

    self.$('#contact-cards').empty();

    self.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: self.template
      });
      $('#contact-cards').append(contactView.render().$el);
    });

    return this;
  },

  events: {
    'click #add-contact': 'addContact'
  },

  addContact: function(event) {
    console.log("In ADD CONTACT, contact data:");
    var formData = this.readContactForm();

    console.log("In ADD CONTACT, contact data:");
    console.log(formData);

    this.model.add(formData);
  },

  readContactForm: function() {
    console.log("Made it");
  var nameData = this.$('#name').val();
  this.$('#name').val('');

  var emailData = this.$('#email').val();
  this.$('#email').val('');

  var phoneData = this.$('#phone').val();
  this.$('#phone').val('');

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
