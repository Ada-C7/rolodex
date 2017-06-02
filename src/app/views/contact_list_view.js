import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import ContactView from '../views/contact_view.js';


const ContactListView = Backbone.View.extend({
    initialize: function(params){
          this.template = params.template;
          this.listenTo(this.model, 'update', this.render);
      },

  render: function() {
      this.$('#contact-cards').empty();
      var that = this;
      this.model.each(function(contact){
          var myContactView = new ContactView({
              model: contact,
              template: that.template,
            //   tagName: 'li'
          });
          that.$('#contact-cards').append(myContactView.render().el);
      });
      return this;
  },
    events:{
        'click #save': 'addContact',
        'click #cancel': 'cancelContact'
    },

    getFormData: function(){
        var formName = this.$('#name').val();
        var formPhone = this.$('#phone').val();
        var formEmail = this.$('#email').val();

        return {
            name: formName,
            phoneNumber: formPhone,
            email: formEmail
        };
    },

    addContact: function(){
        var contact = new Contact(this.getFormData());
        this.model.add(contact);
        console.log(contact);
    },

    cancelContact: function(){
        this.$('#name').val('');
        this.$('#phone').val('');
        this.$('#email').val('');
    }
});

export default ContactListView;
