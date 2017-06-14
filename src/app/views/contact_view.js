import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';

const ContactView = Backbone.View.extend({
     initialize: function( params ) {
     this.template = params.template;
     this.listenTo( this.model, 'change', this.render );
     this.$el.addClass( 'row align-center' )
},
render: function() {
     var renderedTemplate = this.template(this.model.toJSON());
     this.$el.html( renderedTemplate );
     return this;
},
renderExpanded: function() {
     var renderedTemplateExpanded = $('#tmpl-contact-details').html();
     var templateObject = _.template(renderedTemplateExpanded);
     var compiledHTML = templateObject(this.model.toJSON());
     $('#contact-details').html(compiledHTML);
},
events: {
     'click .contact-card': 'expandContact',
},
expandContact: function( event ) {
     $( '#contact-details' ).toggleClass( 'hidden' );
     this.renderExpanded();
}
});

export default ContactView;
