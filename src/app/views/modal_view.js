import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view.js';
import Contact from '../models/contact.js';

var BaseModalView = Backbone.View.extend({

    id: 'base-modal',
    className: 'modal fade hide',
    template: 'modals/BaseModal',

    events: {
      'hidden': 'teardown'
    },

    initialize: function() {
      _.bindAll(this, 'show', 'teardown', 'render', 'renderView');
      this.render();
    },

    show: function() {
      this.$el.modal('show');
    },

    teardown: function() {
      this.$el.data('modal', null);
      this.remove();
    },

    render: function() {
      this.getTemplate(this.template, this.renderView);
      return this;
    },

    renderView: function(template) {
      this.$el.html(template());
      this.$el.modal({show:false}); // dont show modal on instantiation
    }
 });
