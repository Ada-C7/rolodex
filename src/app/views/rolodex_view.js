import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import ContactView from '../views/contact_view.js';
import ContactDetailsView from '../views/contact_details_view.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;

    this.listenTo(this.model, "update", this.render);
  },

  render: function(){
    this.$('#contact-cards').empty();
    
    // saved a reference to 'this'
    var that = this;

    // looped through collection
    this.model.each(function(contact) {
      // created a new view for each task
      var myContactView = new ContactView({
        model: contact,
        template: that.template
        // tagName: 'li'
      });
      // rendered the view and appended it to 'todo-items'
      that.$('#contact-cards').append(myContactView.render().el);
      that.listenTo(myContactView, "selected", function(view){
        console.log("triggered");
        console.log(view);
          var myContactDetailsView = new ContactDetailsView({
            model: view.model,
            template: _.template($('#tmpl-contact-details').html()),
            el: '#contact-details'
          });

          myContactDetailsView.render();
          // that.$('#contact-details').show();

        // this.$('#contact-cards').append(myContactView.render().el);
        // that.$('#contact-details').show();

      });
    });
    // returning this view object so you can chain functions like myView.render().el
    return this;
  },

  events: {
    "click .btn-save": "saveContact",
    "click .btn-cancel": "clearForm",

    // "click h4": "testFunction"
  },

  getFormData: function() {
    var formName = this.$("#name").val();
    // this.$("#name").val('');

    // get checkbox and find out if it's checked - true/false
    var formEmail = this.$("#email").val();
    // this.$("#email").val('');

    // clear checkbox get the property 'checked' and force is to false
    var formPhone = this.$('#phone').val();
    // this.$('#phone').val('');
    this.clearForm();
    return {
      name: formName,
      email: formEmail,
      phone: formPhone
    };


  },
  // testFunction: function() {
  //   console.log("something");
  // },

  saveContact: function() {
    var contact = new Contact(this.getFormData());
    this.model.add(contact);
    console.log(contact);
    console.log(this.model);
  },

  clearForm: function() {
    this.$("#name").val('');
    this.$("#email").val('');
    this.$('#phone').val('');
  }
});

export default RolodexView;
