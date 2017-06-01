import Backbone from 'backbone';

const ContactListView = Backbone.View.extend({
    initialize: function(params){
          this.template = params.template;
          this.listenTo(this.model, 'update', this.render);
      },

  render: function() {
      this.$('.contact-cards').empty();
      var that = this;
      this.model.each(function(task){
          var contactView = new ContactView({
              model: contact,
              template: that.template
          });
          that.$('.contact-cards').append(contactView.render().$el);
      });
      return this;
  },
    events:{
        'click #btn-save': 'addContact'
    },
    
});

export default ContactListView;
