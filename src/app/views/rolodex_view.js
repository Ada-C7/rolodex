import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view.js';

const RolodexView = Backbone.View.extend({
   initialize: function(rolodexParams) {
     this.template = rolodexParams.template;
   },
   render: function() {
     console.log('whatup');
     var compiledTemplate =
     this.template(this.model.toJSON());
     this.$el.html(compiledTemplate);
     return this;
   }
});

export default RolodexView;
