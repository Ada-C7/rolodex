import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import ModalView from '../views/modal_view.js';

const ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
    this.$el.addClass("contact-card small-11 medium-4 large-2 ");
    // medium-offset-1 columns - taking this off b/c looks terrible.
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click li': 'showTaskInfo'
  },
  showTaskInfo: function(e){
    var popUp = new ModalView({
      model: this.model,
      template: _.template($("#tmpl-contact-details").html())
    });
    $("#contact-details").append(popUp.render().$el);
  }

});

export default ContactView;
