import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import ContactView from '../views/contact_view.js';
import ContactDetail from '../views/contact_detail.js'


const ContactListView = Backbone.View.extend({
    //this params has the model which is a list of Contacts
    // params also has the template for a contact view lsit
    // and has the el as application
    //params are defined in app.js in the call
    initialize: function(params){
          this.template = params.template;
          this.detailsTemplate = params.detailsTemplate;
          this.listenTo(this.model, 'update', this.render);
      },

  render: function() {
      this.$('#contact-cards').empty();
      this.$("#contact-details").hide();
      var that = this;

      this.model.each(function(contact){
          var myContactView = new ContactView({
              model: contact,
              template: that.template,
              detailsTemplate: that.detailsTemplate
            //   tagName: 'li'
          });
          that.$('#contact-cards').append(myContactView.render().el);

          that.listenTo(myContactView, 'selected', function(view){
              this.$('#contact-details').html(myContactView.renderCardDetails());
              this.$("#contact-details").show();

              //
            //   var myContactDetail = new ContactDetail({
            //       model: view.model,
            //       template:_.template($('#contact-details').html()),
            //   });
          });
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
