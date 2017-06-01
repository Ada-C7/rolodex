import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';


var ContactView = Backbone.View.extend({

    // defining properties of the el
    initialize: function(params) {
     this.cardTemplate = params.template;
    //  this.detailsTemplate = params.contactDetailsTemplate;
    },
    render: function() {
      var compiledTemplate = this.cardTemplate(this.model.toJSON());
      this.$el.html(compiledTemplate);
      return this;
    }
  });



export default ContactView;
