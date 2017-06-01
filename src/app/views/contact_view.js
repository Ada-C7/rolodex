import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact';

const ContactView = Backbone.View.extend({
  // cards are being sandwhiched inbetween div elements
  // tagName: "",
  // className: "",
  initialize: function(params) {
    this.templateCard = params.templateCard;
    console.log(this);
  },

  render: function(){
    var compiledTemplate = this.templateCard(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click li.contact-card': "showDetails"
  },

  // on the right track...
  showDetails: function(event){
    console.log("show the contact details");
    $("#contact-details").show();
  }
});

export default ContactView;
