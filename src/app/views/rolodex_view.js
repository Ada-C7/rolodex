import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from '../views/contact_view';
import Contact from '../models/contact';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.templateCard = params.templateCard;
    this.listenTo(this.model, "update", this.render);
  },

  render: function(){
    this.$('#contact-cards').empty();

    var that = this;
    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        templateCard: that.templateCard,
      });

      that.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },

  events: {
    'click .btn-save': "addContact"
  },

  addContact: function(event){
    console.log("adding new contact");
    var contactData = this.readNewContactForm();
    var contact = new Contact(contactData);
    this.model.add(contact);
  },

  readNewContactForm: function(){
    console.log("make form data into object");

    var name = this.$("#name").val();
    // this is what deletes the users input from the text field
    this.$("#name").val("");

    var email = this.$('#email').val();
    this.$('#email').val("");

    var phone = this.$('#phone').val();
    this.$('#phone').val("");

    return {
      name: name,
      phone: phone,
      email: email
    };
  }
});

export default RolodexView;
