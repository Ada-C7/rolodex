import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact';

const ContactView = Backbone.View.extend({

  initialize: function(contactParams) {
      this.template =  contactParams.template;
      this.listenTo(this.model, "change", this.render);
    },

    events: {
      'click': 'selectContact'
    },

    selectContact: function(event) {
      event.stopPropagation();
      this.trigger("showDetails", this.model);
    },

    render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    console.log("CONTACT VIEW" + this.model.toJSON());

    this.$el.html(compiledTemplate);
    return this;
    }
  });

export default ContactView;
