import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import Contact from '../models/contact.js';
import Rolodex from '../collections/rolodex.js';
import ContactDetailView from '../views/contact_detail_view.js';


const ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.$el.addClass("contact-card small-11 medium-4 large-2 medium-offset-1 columns");
    this.listenTo(this.model, "change", this.render);
    this.listenTo("body", "click", this.hideCard);
  },

  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    "click" : "showCard",
    // "click body" : "hideCard"
  },

  showCard: function() {
    $("#contact-details").empty();
    $("#contact-details").removeClass("hide");
    console.log("clicked a card");
    var contactDetailView = new ContactDetailView({
      model: this.model,
      template: _.template($("#tmpl-contact-details").html())
    });

    $("#contact-details").append(contactDetailView.render().el);

  },

  hideCard: function() {
    console.log("tried to hide card");
    $('body').off('click', this.remove);
    // This is what the default `remove` does.
    this.$el.remove();
    return this;
    // if ( $(event.target).closest("#contact-details").length > 0 ) {
    //   return false;
    // } else {
      // $("#contact-details").empty();
    //   $("#contact-details").addClass("hide");
    // }
  }


});

export default ContactView;
