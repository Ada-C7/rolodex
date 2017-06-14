import Backbone from 'backbone';
import $ from 'jquery';
import Contact from 'app/models/contact.js'
import ContactView from './contact_view.js'

var YolodexView = Backbone.View.extend({
     initialize: function(params) {
          this.template = params.template;
          this.listenTo(this.model, 'update', this.render);
     },
     render: function() {
     this.$('#contact-cards').empty();
          var that = this;
          this.model.each(function( contact ) {
               var firstContactView = new ContactView({
                    model: contact,
                    template: that.template,
                    tagName: 'li'
               });
          that.$('#contact-cards').append(firstContactView.render().$el);
     });
          return this;
     },
     events: {
          'click .btn-save': 'saveContact',
          'click .btn-cancel': 'cancelContact',
          // 'click main': 'contractContact'
     },
     getFormData: function() {
          console.log('testing123');
          var formName = this.$('#name').val();
          this.$('#name').val('');

          var formEmail = this.$('#email').val();
          this.$('#email').val('');

          var formPhone = this.$('#phone').val();
          this.$('#phone').val('');

          return {
               name: formName,
               email: formEmail,
               phone: formPhone
          };
     },
     saveContact: function() {
          console.log( 'testing321' );
          var firstContact = new Contact(this.getFormData());
          this.model.add(firstContact);
     },
     cancelContact: function() {
          this.$('.form-field').val('');
     },
     contractContact: function( event ) {
          // $( '#contact-details' ).addClass( 'hidden' );
     }

});

export default YolodexView;
