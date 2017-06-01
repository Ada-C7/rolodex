import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view';
import Contact from '../models/contact';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
  },
  render: function(){
    var self = this;
    self.$("#contact-cards").empty();
    // console.log(self.model);
    self.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: self.template
      });
      self.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },
  events: {
    'click .btn-save': 'addContact',
    'click .btn-cancel': 'cancelContact'
  },
  addContact: function(event) {
    //create variable called formdata that will grab the values from another method called readRolodexForm, which is grabbing the values from the form for us.
    var formData = this.readRolodexForm();

    //create a variable called contact and create a new instance of contact but pass in the formData into that instance, so it has the contact information.
    var contact = new Contact(formData);
    console.log(contact);
    // call the model (this) and call .add(contact)
    this.model.add(contact);
  },
  cancelContact: function(event) {
    $('#name').val('');
    $('#email').val('');
    $('#phone').val('');
    // console.log("I'm in cancel");
  },
  readRolodexForm: function() {
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
