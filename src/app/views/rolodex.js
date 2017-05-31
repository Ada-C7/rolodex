import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from '../views/contact_view';
import Contact from '../models/contact';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
  },

  render: function(){
    this.$('#contact-cards').empty();

    var that = this;
    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: that.template,
      });

      that.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },

  // var renderRolodex = function(rolodex) {
  //   // console.log("in renderRolodex");
  //   $('#contact-cards').empty();
  //
  //   rolodex.each(function(contactInfo) {
  //     var contactView = new ContactView ({
  //       model: contactInfo,
  //       template: templateCard
  //     });
  //
  //     $('#contact-cards').append(contactView.render().$el);
  //   });
  // };

});

export default RolodexView;
