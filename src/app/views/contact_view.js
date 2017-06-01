import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.$el.addClass('contact-card small-11 medium-4 large-2 medium-offset-1 columns');
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  }
});

export default ContactView;
