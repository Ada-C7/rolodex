import Backbone from 'backbone';
import Contact from '../models/contact.js';

const ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    // this.$el.addClass("contact-card small-11 medium-4 large-2 medium-offset-1 columns");

    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());

    this.$el.html(compiledTemplate);

    return this;
  },
  events: {
    "click li": "loadContact"
  },

  loadContact: function() {
    console.log("blabala");
      // this.$('#contact-details').show();
      console.log(this);

      this.trigger("selected", this);
      

  }

});

export default ContactView;
