import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import ContactView from './contact_view.js';

var RolodexView = Backbone.View.extend({

  initialize: function(params){
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
  },

  render: function(){
    this.$('#contact-cards').empty();
    var self = this;
    this.model.each(function(task){
      var taskView = new TaskView({
        model: task,
        template: self.template,
        tagName: 'li'
      });
      self.$("#contact-cards").append(taskView.render().el);
    });

    return this;
  },

  events: {
    "click .btn-save" : "addContact"
  },

  getFormData: function(){

    var formName = this.$('.form-name').val();
    this.$('.form-name').val(' ');

    var formEmail = this.$('.form-email').val();
    this.$('.form-email').val(' ');

    var formPhone = this.$('.form-phone').val();
    this.$('.form-phone').val(' ');

    return {
      name: formName,
      email: formEmail,
      phone: formPhone
    };
  },

  addContact: function(){
    var contact = new Contact(this.getFormData());
    this.model.add(contact);
  }
});

export default RolodexView;
