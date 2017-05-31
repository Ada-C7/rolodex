import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from '../views/contact_view';
import Contact from '../models/contact';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
  },

  render: function(){
    this.$('#contact-cards').empty();

    var that = this;
    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: that.template,
      });

      that.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },

  events: {
    'click h3#save-button': "addContact"
  },

  readNewContactForm: function(){
    console.log("make form data into object");

    var name = $("#name").val();
    // this is what deletes the users input from the text field
    $("#name").val("");

    var email = $('#email').val();
    $('#email').val("");

    var phone = $('#phone').val();
    $('#phone').val("");

    return {
      name: name,
      phone: phone,
      email: email
    };
  },

  addContact: function(event){
    console.log("adding new contact");
    var contactData = this.readNewContactForm();
    var contact = new Contact(contactData);
    this.model.add(contact);
  }
});

export default RolodexView;
