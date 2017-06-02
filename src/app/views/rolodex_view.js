import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import ContactView from './contact_view.js';
import ContactDetailsView from './contact_details_view.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.detailsTemplate = params.detailsTemplate;
    this.listenTo(this.model, 'update', this.render);
  },
  render: function() {
    this.$('#contact-cards').empty();
    var that = this;
    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: that.template,
        tagName: 'li'
      });
      that.$('#contact-cards').append(contactView.render().el);
      that.listenTo(contactView, 'details', function(contact) {
        var contactDetailsView = new ContactDetailsView({
          model: contact,
          template: that.detailsTemplate
        });
        that.$('#contact-details').html(contactDetailsView.render().el);
        that.$('#contact-details').show();
      });
    });
    return this;
  },
  events: {
    'click .btn-save': 'addContact',
    'click .btn-cancel': 'clearForm',
    'click': 'hideDetails'
  },
  hideDetails: function() {
    this.$('#contact-details').hide();
  },
  addContact: function() {
    var contact = new Contact(this.getFormData());
    this.model.add(contact);
  },
  getFormData: function() {
    var formName = this.$('#name').val();
    var formEmail = this.$('#email').val();
    var formPhone = this.$('#phone').val();
    this.clearForm();
    return {
      name: formName,
      email: formEmail,
      phone: formPhone
    };
  },
  clearForm: function() {
    this.$('#name').val('');
    this.$('#email').val('');
    this.$('#phone').val('');
  }
});

export default RolodexView;
