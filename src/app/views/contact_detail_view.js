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
    console.log("inside render function for detail");
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    "click button.btn-delete" : "removeCard",
    "click button.btn-edit" : "editCard",
    "click" : "getInput"
  },

  removeCard: function() {
    event.stopPropagation();
    console.log("clicked delete");
    this.model.destroy();
    $("#contact-details").hide();
  },

  getInput: function(event) {
    $('input').click(function(event) {
      event.preventDefault();
    });
  },

  editCard: function() {

    console.log("clicked edit");
    var editContactView = new EditContactView({
      model: this.model,
      template: _.template($("#tmpl-edit-contact").html())
    });
    $("#contact-details").empty();
    $("#contact-details").append(editContactView.render().el);
    return false;
  }


});

export default ContactDetailView;
