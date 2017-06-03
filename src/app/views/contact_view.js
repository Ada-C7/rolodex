import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
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
    "click": "showCard"
  },

  showCard: function(event) {
    event.stopPropagation();
    this.trigger("cardDetails", this.model);
  }
});

export default ContactView;
