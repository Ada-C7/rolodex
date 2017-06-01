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
    "click button#edit-contact" : "saveChanges",
    "click button#cancel-edit" : "cancel"
  },

  saveChanges: function() {
    this.$el.html("");
    this.set(this, getFormData());
  },

  cancel: function() {
    var contactDetailView = new ContactDetailView({
      model: this.model,
      template: _.template($("#tmpl-contact-details").html())
    });
    $("#contact-details").append(contactDetailView.render().el);
  }


});

export default EditContactView;
