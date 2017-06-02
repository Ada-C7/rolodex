import Backbone from 'backbone';
import ContactDetailsView from './contact_details_view.js';

const ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.$el.addClass("contact-card small-11 medium-4 large-2 medium-offset-1 columns");
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    "click" : "showDetails"
  },
  showDetails: function (event) {
    this.trigger('showCard', this);
    event.stopPropagation();
  }
});

export default ContactView;
