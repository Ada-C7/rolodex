import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view'

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
  },
  render: function(){
    var self = this;
    self.$("#contact-cards").empty();
    console.log(self.model);
    self.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: self.template
      });
      self.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  }
});

export default RolodexView;
