import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact';

// this view is ONLY responsible for the contact card
const ContactView = Backbone.View.extend({

  tagName: "li",
  className: "contact-card small-11 medium-4 large-2 medium-offset-1 columns end",

  initialize: function(params) {
    this.templateCard = params.templateCard;
    this.listenTo(this.model, "change", this.render);
    // console.log(this);
  },

  render: function(){
    var compiledTemplate = this.templateCard( this.model.toJSON() );
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click': "details"
  },

  details: function(event) {
    // use .stopPropagation to stop the hideDetails click handler from also being called
    event.stopPropagation();
    console.log("you clicked on a card");

    // this is the contact view - which has access to the contact model
    this.trigger("displayDetails", this);
  }
});

export default ContactView;
