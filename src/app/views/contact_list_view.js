import Backbone from 'backbone';

const ContactListView = Backbone.View.extend({
    initialize: function(params){
          this.template = params.template;
          this.listenTo(this.model, 'update', this.render);
      },

  render: function() {
      this.$('.contact-cards').empty();
      var that = this;
      this.model.each(function(contact){
          var contactView = new ContactView({
              model: contact,
              template: that.template
          });
          that.$('.contact-cards').append(contactView.render().$el);
      });
      return this;
  },
    events:{
        'click #save': 'addContact'
    },

    var getFormData = function(){
        var formName = this.$('#name').val();
        this.$('#name').val('');
        var formPhone = this.$('#phone').val();
        this.$('#phone').val('');
        var formEmail = this.$('#email').val();
        this.$('#email').val('');

        return {
            name: formName,
            phoneNumber: formPhone,
            email: formEmail
        };
    },
    addContact: function(e){
        var contactData - this.getFormData();
        var contact = new Contact(contactData);
        this.model.add(contact);
    }

});

export default ContactListView;
