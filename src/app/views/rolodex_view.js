import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.cardTemplate = params.template;
    this.listenTo(this.model, "update", this.render);
  },
  render: function(){
    var self = this;
    self.$('#contact-cards').empty();

    self.model.each(function(contact) {

      var contactView = new ContactView({
        model: contact,
        template: self.cardTemplate
      });

      self.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },
  events: {
  'click .btn-save': "addContact",
  'click .btn-cancel': "cancelContact",
},
getFormFields: function(){
  var nameData = this.$('.name').val();
  this.$('.name').val('');

  var emailData = this.$('.email').val();
  this.$('.email').val('');

  var phoneData = this.$('.phone').val();
  this.$('.phone').val('');

  return {
    name: nameData,
    email: emailData,
    phone: phoneData
  };
},
addContact: function() {
  var formValues = this.getFormFields();
  this.model.add(formValues);
}

});



export default RolodexView;
