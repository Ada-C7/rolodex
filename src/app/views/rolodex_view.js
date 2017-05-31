import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import ContactView from '../views/contact_view.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;

    this.listenTo(this.model, "update", this.render);
  },

  render: function(){
    this.$('#contact-cards').empty();
    this.$('#contact-details').hide();
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
    });
    // returning this view object so you can chain functions like myView.render().el
    return this;
  },
  events: {
    "click #btn-save": "saveContact"
  },

  getFormData: function() {
    var formName = this.$("#name").val();
    this.$("#name").val('');

    // get checkbox and find out if it's checked - true/false
    var formEmail = this.$("#email").val();
    this.$("#email").val('');

    // clear checkbox get the property 'checked' and force is to false
    var formPhone = this.$('#phone').val();
    this.$('#phone').val('');

    return {
      name: formName,
      email: formEmail,
      phone: formPhone
    };
  },

  saveContact: function() {
    var contact = new Contact(this.getFormData());
    this.model.add(contact);
  }
});

export default RolodexView;
