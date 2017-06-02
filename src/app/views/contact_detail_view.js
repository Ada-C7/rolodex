import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import Contact from '../models/contact.js';
import Rolodex from '../collections/rolodex.js';
import EditContactView from '../views/edit_contact_view.js';

const ContactDetailView = Backbone.View.extend({
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
    "click button.btn-delete" : "removeCard",
    "click button.btn-edit" : "editCard",
    "click" : "preventClose"
  },

  preventClose: function(event) {
    event.stopPropagation();
  },

  removeCard: function(event) {
    event.stopPropagation();
    this.model.destroy();
    $("#contact-details").hide();
  },

  editCard: function(event) {
    event.stopPropagation();
    var editContactView = new EditContactView({
      model: this.model,
      template: _.template($("#tmpl-edit-contact").html())
    });
    $("#contact-details").empty();
    $("#contact-details").append(editContactView.render().el);
    this.listenTo(editContactView, "showCard", this.refreshCard);
  },

  refreshCard: function(event) {
    this.trigger("showCard", this);
  }

});

export default ContactDetailView;
