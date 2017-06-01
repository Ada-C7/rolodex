import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact';

const ContactView = Backbone.View.extend({

  initialize: function(contactParams) {
      this.template =  contactParams.template;

      this.listenTo(this.model, "change", this.render);
    },
    render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
    }
  });

export default ContactView;
