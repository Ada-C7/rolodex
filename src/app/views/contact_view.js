import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

var ContactView = Backbone.View.extend({

  tagname: "li"
  template: _.template($('#contact-template').html()),

  events: {
    "click .toggle"   : "toggleDone",
    "dblclick .view"  : "edit",
    "click a.destroy" : "clear",
    "keypress .edit"  : "updateOnEnter",
    "blur .edit"      : "close"
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.toggleClass('save', this.model.get('save'));
    this.input = this.$('.edit');
    return this;
  },

  toggleDone: function(){
    this.model.toggle();
  },

    edit: function(){
      this.$el.addClass("editing");
      this.input.focus();
    },

    close: function(){
      var value = this.input.val();
      if (!value) {
        this.clear();
      } else {
        this.model.save({titleL value});
        this.$el.removeClass("editing");
      }
    },

    updateOnEnter: function(e){
      if (e.keyCode == 13) this.close();
    },

)


  export default ContactView;
