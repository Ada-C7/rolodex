import Backbone from 'backbone';

var ContactDetailsView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click': 'clicked'
  },
  clicked: function() {
    return false;
  }
});

export default ContactDetailsView;
