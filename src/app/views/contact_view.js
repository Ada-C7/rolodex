import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    // this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    // console.log(compiledTemplate);
    this.$el.html(compiledTemplate);

    return this;
  },
  events: {
    // click card, trigger 'showdetails'
    "click" : "selectedHandler"
    // edit contact
  },
  selectedHandler: function(event) {
    event.stopPropagation();
    this.trigger("showDetails", this.model);
  }
});

export default ContactView;
