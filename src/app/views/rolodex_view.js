import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact.js';
import ContactView from 'app/views/contact_view.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    this.$('#contact-cards').empty();
    var that = this;
    console.log(this.model);
    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: that.template,
        tagName: 'li'
      });
      that.$("#contact-cards").append(contactView.render().el);
    });
    return this;
  },
  events: {
    "click #add-contact": "addContact",
    "click #cancel-contact": "cancelContact"
  },
  getFormData: function() {
    var formName =
    this.$("#name").val();
    this.$("#name").val('');

    var formEmail =
    this.$("#email").val();
    this.$("#email").val('');

    var formPhone =
    this.$("#phone").val();
    this.$("#phone").val('');

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
  cancelContact: function() {
    this.$("#name").val('');

    this.$("#phone").val('');

    this.$("#email").val('');
  }
});

export default RolodexView;
