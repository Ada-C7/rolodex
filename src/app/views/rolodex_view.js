import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.cardTemplate = params.template;
    // this.listenTo(this.model, "update", this.render);
  },
  render: function(){
    var self = this;
    self.$('#contact-cards').empty();

    self.model.each(function(contact) {

      var contactView = new ContactView({
        model: contact,
        template: self.cardTemplate
      });

      self.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  }
});



export default RolodexView;
