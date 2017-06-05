import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import RolodexView from '../views/rolodex_view.js';


var ContactDetailsView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;

    console.log("something happened in contact-details");
    // this.listenTo(RolodexView, "selected", this.render);
      // this.$('#contact-details').show();
  },
  render: function(){
    // this.$('#contact-cards').empty();
    // this.$('#contact-details').show();

    console.log("render in contact-details");

    var compiledTemplate = this.template(this.model.toJSON());

    this.$("#contact-details").html(compiledTemplate);
    this.$el.show();

    return this;
  },

  events: {
    "click": "hideDetails"
  },

  hideDetails: function(){
    console.log("hide-details clicked");
    // console.log(this);
    this.$el.hide();
  }


});

export default ContactDetailsView;

// import Contact from '../models/contact.js';
// import ContactView from '../views/contact_view.js';
