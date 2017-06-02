import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import ContactView from './contact_view';
import Contact from '../models/contact';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.contactTemplate = params.contactTemplate;
    this.listenTo(this.model, "update", this.render);
  },

  render: function() {
    // console.log("HERE: inside rolodexView render");
    var self = this;

    self.$('#contact-cards').empty();

    self.model.each(function(contact) {

      var contactView = new ContactView( {
        model: contact,
        template: self.contactTemplate
      });
      // console.log(contactView.render().$el);
      $('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },

  cancelContact: function(event) {
    console.log("contact cleared!");
    $(".form-field").val("");
  },

  addContact: function(event) {
  console.log("button clicked!!");
  var formData = this.readContactForm();

  var contact = new Contact(formData);
  this.model.add(contact);
  },

  events: {
    'click #add-contact': 'addContact',
    'click #cancel-contact': 'cancelContact',
  },

  readContactForm: function() {
    var nameData = this.$('#name').val();
    console.log("nameData");
    this.$('#name').val('');

    var emailData = this.$('#email').val();
    this.$('#email').val('');

    var phoneData = this.$('#phone').val();
    this.$('#phone').val('');

    var formData = {};
    if (nameData) {
    console.log(nameData);
      formData['name'] = nameData
    }
    if (phoneData) {
      formData['phone'] = phoneData
    }
    if (emailData) {
      formData['email'] = emailData
    }
    return formData;
  },

});

export default RolodexView;
