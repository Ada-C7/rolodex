import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    // this.listenTo(this.model, "change", this.render);

    // listenTo trigger for more details
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    // console.log(compiledTemplate);
    this.$el.html(compiledTemplate);

    return this;
  },
  events: {
    // edit contact
  }
});

export default ContactView;
