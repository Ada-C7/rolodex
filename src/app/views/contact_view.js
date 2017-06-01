// contact_view.js
import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';

const ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.$el.addClass('contact-card small-11 medium-4 large-2 medium-offset-1 columns');
    this.listenTo(this.model, "change", this.render);
    console.log(this.$el);
    this.listenTo(this.$el, 'click', this.showContactDetails);
  },

  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  },

  events: {
    // 'click .btn-save': 'saveContact',
    'click': 'showContactDetails'
  },

  showContactDetails: function() {
    
    $('#contact-details').show();
    console.log("CLICKED");
    console.log(this.model);
    console.log(this.model.get("name"));
  },

  // saveContact: function() {
  //   console.log("HELLO");
  //   var contact = new Contact(getContactInfo);
  //   rolodexList.add(contact);
  // }

});


export default ContactView;
