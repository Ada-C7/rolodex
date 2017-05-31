import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact';

const ContactView = Backbone.View.extend({
  // tagName: "",
  // className: "",

  initialize: function(params) {
    this.template = params.template;
    console.log(this);
  },

  render: function(){

    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click li.contact-card': "showDetails"
  },

  // on the right track - probably should make this call a model function
  showDetails: function(){
    console.log("show the contact details");
    $("#contact-details").show();
  }
});

export default ContactView;
