import Backbone from 'backbone';
import $ from 'jquery';

const ContactView = Backbone.View.extend({
  // contact_view is in <ul> w/ id=contact-cards
  tagName: 'li',

  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },


// .contact-form section to add new contact

// button.btn-save on click saves a new contact AND clear form

// button.btn-cancel on click clears the new contact form

});

export default ContactView;
