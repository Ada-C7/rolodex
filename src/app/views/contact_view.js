import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from '../models/contact';


var ContactView = Backbone.View.extend({
  initialize: function(params) {
    console.log(params);
    this.model = params.model;
    this.template = params.template;

    var test1 = this.listenTo(this.model, 'change', this.render);
    console.log(this.render);

    console.log("test1");
    console.log(test1);
    console.log("test1");

  },
  render: function() {
    console.log("Inside render");
    console.log(this.model);
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click button.btn-save': 'saveContact',
    'click button.btn-cancel': 'cancelContact'
  },
  saveContact: function(event) {

    alert("Inside saveContact");
    console.log("working");

    // this.model.save({
    //   name: $('#name').val(),
    //   email: $('#email').val(),
    //   phone: $('#phone').val()
    // });
    // this.render();

  },
  cancelContact: function(event) {
    // console.log("working");
    //
    // $('#name').val('');
    // $('#email').val('');
    // $('#phone').val('');

  }
});

export default ContactView;
