import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.listenTo(this.model, "change", this.render);

    this.$el.addClass("contact-card column column-block")
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click li': 'getDetails',
  },
  getDetails: function() {
    this.trigger("contactClick", this.model);
  }
});

export default ContactView;
