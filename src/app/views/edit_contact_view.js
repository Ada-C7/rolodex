import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import Contact from '../models/contact.js';
import Rolodex from '../collections/rolodex.js';

const EditContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    "click button.btn-save-edit" : "saveChanges",
    "click button#cancel-edit" : "cancel",
    "click input" : "allowFormInput",
    "click" : "preventClose"
  },

  preventClose: function(event) {
    event.stopPropagation();
  },

  allowFormInput: function(event) {
    event.stopPropagation();
  },

  getFormData: function() {
    var formName = $("#edit-name").val();
    var formPhone = $("#edit-phone").val();
    var formEmail = $("#edit-email").val();
    this.clearForm();

    return {
      name: formName,
      phone: formPhone,
      email: formEmail
    };
  },

  saveChanges: function(event) {
    event.stopPropagation();
    event.preventDefault();
    var data = this.getFormData();
    this.model.set(data);
    this.trigger("showCard", this);
  },

  clearForm: function() {
    $("#edit-name").val('');
    $("#edit-phone").val('');
    $("#edit-email").val('');
  },

  cancel: function() {
    event.stopPropagation();
    this.trigger("showCard", this);
  }

});

export default EditContactView;
