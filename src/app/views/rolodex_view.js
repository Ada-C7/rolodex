import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view';;

tmpl-contact-card
tmpl-contact-details

var Rolodex = Backbone.View.extend({

  initialize: function(params){
    this.ContactView = params.ContactView;

    this.listenTo(this.model, "update", this.render);
  },

  render: function(){
    var self = this;

    self.$('.tmpl-contact-details').empty();

    self.model.each(function(task) {
      var ContactView = new ContactView({

        model: contact,
        template: self.ContactView
      });
      self.$('.tmpl-contact-details').append(ContactView.render().$el);

    });
    return this;
},

events: {
  'click #button btn-save': 'button btn-save'
},

addContact: function(event) {
  var formData = this.readContactCard();
  this.model.add(formData)
},

readContactCard: function(){
  var nameData = this.$('name').val();
  this.$('name').val('');
},
return formData;


})

export default Rolodex
