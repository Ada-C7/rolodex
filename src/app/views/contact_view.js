import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';


const ContactView = Backbone.View.extend({

  initialize: function(params){
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    "click .contact-card": "displayModal"
  },

  displayModal: function(){
    $('#contact-details').empty();
    var contactDetails = this.generateHTML();
    $("#contact-details").append(contactDetails);

  },

  getData: function(){
    var name = this.model.get('name');
    var email = this.model.get('email');
    var phone = this.model.get('phone');

    return {
      name: name,
      email: email,
      phone: phone
    };
  },
  generateHTML: function(){
    var contactDetailsData = this.getData();

    var contactDetailsTemplate = _.template($('#tmpl-contact-details').html());

    var generatedHTML = contactDetailsTemplate({
      name: contactDetailsData.name,
      email: contactDetailsData.email,
      phone: contactDetailsData.phone
    });

    return generatedHTML;
  }

});

export default ContactView;
