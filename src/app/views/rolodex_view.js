// rolodex_view.js
import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact.js';
import ContactView from 'app/views/contact_view.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;
    this.detailsTemplate = params.contactDetailsTemplate;
    this.listenTo(this.model, "update", this.render);
    this.$('#contact-details').hide();
  },
  render: function() {
    this.$('#contact-cards').empty();
    var that = this;
    this.model.each(function(contact) {
      var myContactView = new ContactView({
        model: contact,
        template: that.template,
        tagName: 'li'
      });

      that.listenTo(myContactView, "showDetail", that.showModal);
      // rendered view and append to todoitems
      that.$('#contact-cards').append(myContactView.render().el);
    });
    return this;
  },
  events: {
    // listeners
    "click .btn-save" : "addContact",
    "click .btn-cancel" : "resetForm",
    'click' : "hideModal"
  },
  getFormData: function() {
    var formName = this.$('input[name=name]').val();
    var formEmail = this.$('input[name=email]').val();
    var formPhone = this.$('input[name=phone]').val();
    this.resetForm();

    return {
      name: formName,
      email: formEmail,
      phone: formPhone
    };
  },
  addContact: function() {
    var contact = new Contact(this.getFormData());
    this.model.add(contact);
  },
  resetForm: function() {
    this.$('input[name=name]').val('');
    this.$('input[name=email]').val('');
    this.$('input[name=phone]').val('');
  },
  showModal: function(contact) {
    this.$('#contact-details').html(this.detailsTemplate(contact.toJSON())).show();
  },
  hideModal: function(event) {
    this.$('#contact-details').hide();
  }
});

export default RolodexView;
