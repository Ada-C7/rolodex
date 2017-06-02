import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact.js';
import Rolodex from 'app/collections/rolodex.js';

var ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template; // saves the template that we are going to use
    this.$el.addClass("contact column column-block"); // grabbing el and adding the right classes to it

    this.listenTo(this.model, "change", this.render); // listen for custom backbone events
  },
  // take the model's attributes and stick them into that ERB content in the view (draw the view)
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    // fill in our el field with our compiled template
    this.$el.html(compiledTemplate); // "this" refers to the current view instance
    // return the whole view object
    return this; // returning the view object so we can chain
  },
  events: {
    'click button.success': "toggleComplete",
    'click li': 'selected'
  },
  selected: function(view) {
    this.trigger("selected", this.model); // new code, does it work?!??!?!?!??!?!??!?!!???!?!?!?!??
  }
 });

export default ContactView;
