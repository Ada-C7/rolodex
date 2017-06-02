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
    // var self = this; //Change this.
    var self = this;
    self.$('#contact-cards').empty();

    self.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: self.contactTemplate
      });
      self.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },
  events: {
    'click h3.button.btn-save': 'saveContact',
    'click h3.button.btn-cancel': 'cancelContact'
  },
  saveContact: function(event) {

    alert("Inside saveContact");
    // console.log("working");
    console.log(event);

    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();

    var newContact = new Contact ({
      name: $('#name').val(),
      email: $('#email').val(),
      phone: $('#phone').val()
    });
    // debugger
    console.log(newContact);
    this.render();

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
