import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';


var ContactView = Backbone.View.extend({

    // defining properties of the el
    tagName: 'li',
    className: "contact-card small-11 medium-4 large-2 medium-offset-1 columns",



    initialize: function(params) {
     this.contactCardTemplate = params.cardTemplate;
     this.contactDetailsTemplate = params.detailsTemplate;
    },
    render: function() {
      var templateHTML = this.contactCardTemplate(this.model.toJSON());
      this.$el.html(templateHTML);
      return this;
    },
    events: {
      'click' : "selectContact",
    },
    selectContact: function(event){
      this.$el.trigger('contactSelected', this.model);
      event.stopPropagation();
    }
  });



export default ContactView;
