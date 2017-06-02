import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact';
import ContactView from '../views/contact_view.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params){
    this.contactTemplate = params.contactTemplate;
    this.listenTo(this.model, "update", this.render);

  },
  render: function() {
    this.$('#contact-cards').empty();

    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: this.contactTemplate
      });
      this.$('#contact-cards').append(contactView.render().$el);
    }.bind(this));
    return this;
  },
  events: {
    'click h3.button.btn-save': 'saveContact',
    'click h3.button.btn-cancel': 'cancelContact'
  },
  saveContact: function(event) {
    console.log(event);

    var formData = this.readContactForm();
    this.model.add(formData);

    // alert("Inside saveContact");
    // console.log("working");

    // var name = $('#name').val();
    // var email = $('#email').val();
    // var phone = $('#phone').val();
    //
    // var newContact = new Contact ({
    //   name: $('#name').val(),
    //   email: $('#email').val(),
    //   phone: $('#phone').val()
    // });

    console.log(newContact);
    // this.model.add
    return this.render();
    // return this;

  },
  readContactForm: function() {
      var name = $('#name').val();
      $('#name').val('');

      var email = $('#email').val();
      $('#email').val('');

      var phone = $('#phone').val();
      $('#phone').val('');

      return {
        name: name,
        email: email,
        phone: phone
      };
  },
  cancelContact: function(event) {
    // console.log("working");
    //
    // $('#name').val('');
    // $('#email').val('');
    // $('#phone').val('');

  }
});

export default RolodexView;
