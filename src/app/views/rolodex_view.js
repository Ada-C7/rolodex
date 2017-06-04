import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import Contact from '../models/contact';
import ContactView from './contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(params) {

    this.template = params.template;
    this.modal = $('#contact-details');
    this.modalTemplate = _.template($('#tmpl-contact-details').html());
    //  this.model = Contact;

    this.listenTo(this.model, "update", this.render);

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

      //calling the trigger event from contact_view
      that.listenTo(newContactView, "selected", that.displayModal);
    });
    return this;
  },
  events: {
    'click .btn-save' : 'createContact',
    'click .btn-cancel' : 'clearInput',
    'click ' : 'hideModal'
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
    var contact = new Contact(this.getInputData());
    console.log("I am " + contact);
    this.model.add(contact);
    console.log("I am " + contact);
  },
  clearInput: function() {
    this.$('#name').val('');
    this.$('#phone').val('');
    this.$('#email').val('');
  },

  displayModal: function(contactView) {
    $('#contact-details').show();
    $('#contact-details').empty();

    var newModalTemplate = this.modalTemplate(contactView.model.toJSON());
    this.$('#contact-details').append(newModalTemplate);

    return this;
  },

  hideModal: function(contactView) {
    if ($('#contact-details').css("display") !== 'none') {
      $('#contact-details').hide();

      console.log("I am working to hide!");
    }
  }
});

export default RolodexView;
