// add modal view

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
      that.listenTo(contactView, "selected",   // listening to the contactView
        function(contact) {
         var modal = that.$('#contact-details'); // access modal
          modal.show();
          var templateCode = $('#tmpl-contact-details').html(); //using jqurey to select the proper element pulling the contents from within it as a string
          var detailsBuilder = _.template(templateCode); // generate little custom mad lib machine
          var details = detailsBuilder(contact.toJSON()); // converting into what our machine needs
          modal.html(details);
        });
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
