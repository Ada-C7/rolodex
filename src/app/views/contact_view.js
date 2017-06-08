import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact';

const ContactView = Backbone.View.extend({
  // ------------------
  // Wave 2
  // ------------------
  // tagName: 'li',
  // className: 'contact-card small-11 medium-4 large-2 medium-offset-1 columns',
  // ^^ commented out because click action didn't work.
  initialize: function(params) {
    this.template = params.template;
    // console.log(params.template);
    this.listenTo(this.model, "change", this.render);

  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    "click li": 'contactInfo'
  },
  contactInfo: function() {
    console.log("clicked card: ");
    console.log(this);
    this.trigger("selected", this);
  }
});

export default ContactView;
