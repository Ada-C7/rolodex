import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view.js';

const RolodexView = Backbone.View.extend({

  initialize: function(rolodexParams) {
      this.template =  rolodexParams.template;
    },
    render: function() {
      // console.log('INSIDE RolodexView Render');
      var compiledTemplate = this.template(this.model.toJSON());
      // console.log("THIS MODEL IS" + this.model);

      this.$el.html(compiledTemplate);

      return this;
    }
  });

export default RolodexView;
