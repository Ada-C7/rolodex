import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

var ContactDetailsView = Backbone.View.extend({

    // called everytime a new one is crated
    initialize: function(args){
      this.template = _.template($('#tmpl-contact-details').html());
      // this.listenTo(this.model, "click", this.render);
    },

    render: function() {
      console.log(this.model);
      console.log(this.$el);
      var compiledTemplate = this.template(this.model.toJSON());

      this.$el.html(compiledTemplate);

      return this;
    },

    // hide: function() {
    //   console.log("trying to hide");
    //   this.element.hide();
    // },
    //
    // events: {
    //   "click #contact-details" : "hide"
    // }

 });

 export default ContactDetailsView;
