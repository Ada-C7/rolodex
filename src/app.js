import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';
import Rolodex from 'app/Collections/rolodex';
import ContactView from 'app/models/contact_view.js';

var AppView = Backbone.View.extend({

  el: $("#applicqtion")

  contactTemplate: _.template($('#tmpl-contact-card').html()),

  events: {
    "keypress #tmpl-contact-details": "createOnEnter",
    "click #clear-completed": "clearCompleted",
    "click #toggle-all": "toggleAllComplte"
  },

  initialize: function(){

    this.input = this.$("#new-contact");
    this.allCheckbox = this.$("#toggle-all")[0];

    this.listenTo(Contact, 'add', this.addOne);
    this.listenTo(Contact, 'reset', this.addAll);
    this.listenTo(Contact, 'all', this.render);

    //footer line missing
    this.main = $('main');

    Contacts.fetch();
  }

  render: function(){
    var save = Contact.save().length;

  },

  addOne: function(contact){
    var view = new ContactView({model: contact});
    this.$("#contact-cards").append(view.render().el);
  },

  createOnEnter: function(e){
    if (e.keyCode != 13) return;
    if (!this.input.val('')) return;

    Contact.create({title: this.input.val()});
    this.input.val('');
  }



});
export default AppView;
var App = new AppView;
