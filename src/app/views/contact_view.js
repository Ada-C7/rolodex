import Backbone from 'backbone';
import Contact from '../models/contact';

const ContactView = Backbone.View.extend({
  // ------------------
  // Wave 2
  // ------------------
  tagName: 'li',
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
    "click li": 'contactInfo'
  },
  contactInfo: function() {
    console.log(this);
    this.trigger("selected", this);
  }
});

export default ContactView;
