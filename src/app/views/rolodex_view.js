import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view.js';
import Contact from '../models/contact.js'


var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.contactTemplate = params.contactTemplate;
    this.listenTo(this.model, "update", this.render);
  },
  render: function(){
    this.$('#contact-cards').empty();

    var that = this;
    this.model.each(function(contact){

      var contactView = new ContactView({
        model: contact,
        template: that.contactTemplate,
        tagName: 'li'
      });

      that.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },
  events: {
    'click h3.btn-save': "saveContact",
    'click h3.btn-cancel': "cancelContact"
  },
  newContact: function(){
    var name = $('#name').val();
    $('#name').val("");

    var email = $('#email').val();
    $('#email').val("");

    var phone = $('#phone').val();
    $('#phone').val("");

    var postData = {}

  if (name && name != ""){
    postData["name"] = name;
  }
  if (email && email != ""){
    postData["email"] = email;
  }
  if (phone && phone != ""){
    postData["phone"] = phone;
  }
    return postData;
  },
  saveContact: function(){
    var postData = this.newContact();
    this.model.add(postData);
  },
  cancelContact: function() {
    $('#name').val("");
    $('#email').val("");
    $('#phone').val("");
  }
});

export default RolodexView;
