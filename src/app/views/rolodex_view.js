import Backbone from 'backbone';
import $ from 'jquery';
import Contact from '../models/contact';
import ContactView from './contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(params) {

   this.template = params.template;
  //  this.model = Contact;

   this.listenTo(this.model, "update", this.render);

  //  this.input = {
  //    name: this.$('.contact-form input[name="name"]'),
  //    phone: this.$('.contact-form input[name="phone"]'),
  //    email: this.$('.contact-form input[name="email"]')
  //  };
 },
 render: function() {
   this.$("#contact-cards").empty();
   var that = this;

   this.model.each(function(contact) {
     var newContactView = new ContactView({
       model: contact,
       template: that.template,
      //  tagName: 'li'
     });
     that.$('#contact-cards').append(newContactView.render().$el);
   });
   return this;
 },
 events: {
   'click .btn-save' : 'createContact',
   'click .btn-cancel' : 'clearInput'
 },
 getInputData: function() {
   console.log("I am in getInput");
   var contactName = this.$('#name').val();
   this.$('#name').val('');
   var contactEmail = this.$('#email').val();
   this.$('#email').val('');
   var contactPhone = this.$('#phone').val();
   this.$('#phone').val('');

   return {
     name: contactName,
     email: contactEmail,
     phone: contactPhone
   };
 },

 createContact: function() {
  //  event.preventDefault();
   var contact = new Contact(this.getInputData());
      console.log("I am " + contact);
   this.model.add(contact);
   console.log("I am " + contact);
 },
 clearInput: function() {
   this.$('#name').val('');
   this.$('#phone').val('');
   this.$('#email').val('');
 }
});

export default RolodexView;

// this.$('#contact-cards').empty();
//
// var that = this;
// this.model.each(function(contact) {
//   var contactView = new ContactView({
//     model: contact,
//     template: that.template,
//     tagName: 'li'
//   });
//   that.$('#contact-cards').append(contactView.render().$el);
// });
// return this;
