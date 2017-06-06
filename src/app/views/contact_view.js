import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Rolodex from '../models/contact_view.js';

const ContactView = Backbone.View.extend({
    initialize: function(params) {
      this.template = params.template;

      this.listenTo(this.model, "change", this.render);
    },
    render: function() {
      var compiledTemplate = this.template(this.model.toJSON());

      this.$el.html(compiledTemplate);

      return this;
    },
    events: {
      'click button.alert': "deleteContact",
      "click button.success": "saveContact"

    },

    deleteContact: function() {
      this.model.destroy();
    }

});



// task_view.js




export default ContactView;



//
