import Backbone from 'backbone';
import $ from 'jquery';
import Contact from '../models/contact';
import ContactView from 'views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(params) {
  console.log("this is " + params);
   this.template = params.template;
   this.model = Contact;

   this.input = {
     name: this.$('.contact-form input[name="name"]'),
     phone: this.$('.contact-form input[name="phone"]'),
     email: this.$('.contact-form input[name="email"]')
   };
 },
 render: function() {
   this.$("#contact-cards").empty();
   var that = this;

   this.model.each(function(contact) {
     var newContactView = new Contactview({
       model: contact,
       template: that.template,
       tagName: 'li'
     });
     that.$('#contact-cards').append(newContactView.render().$el);
   });
   return this;
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
