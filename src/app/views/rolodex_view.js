import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import Contact from '../models/contact.js';
import ContactView from '../views/contact_view.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.contactTemplate = params.template;
    this.listenTo(this.model, "update", this.render);
  },

  render: function(){
    this.$('#contact-cards').empty();
    var that = this;

    this.model.each(function(contact){
      var contactView = new ContactView({
        model: contact,
        myTemplate: that.contactTemplate,
        // tagName: 'li'
      });
      that.$("#contact-cards").append(contactView.render().$el);
    });

    return this;

  },
  events: {
    // the event hash listen to the event listener
    'click .btn-save' : "saveContact",
    'click .btn-cancel' : "cancelContact",
    'click .contact-card' : 'viewModal',
  },

  getFormData: function(){
    var inputName = this.$('#name').val();
    this.$('#name').val('');

    var inputEmail = this.$('#email').val();
    this.$('#email').val('');

    var inputPhone = this.$('#phone').val();
    this.$('#phone').val('');

    return {
      name: inputName,
      email: inputEmail,
      phone: inputPhone
    };
  },
  saveContact: function(){
    var contact = new Contact(this.getFormData());

    this.model.add(contact);
  },
  cancelContact: function(){
    this.$('#name').val('');
    this.$('#email').val('');
    this.$('#phone').val('');
  },
  viewModals: function(){
    var modal = document.getElementById('#contact-details');
    var btn = document.getElementById(".contact-card");

    


  }

});

export default RolodexView;
