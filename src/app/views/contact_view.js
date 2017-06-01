//contact_view

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';


const ContactView = Backbone.View.extend({
    initialize: function(params){
        //need to add more stuff here about adding class and listening events
        this.template = params.template;
        this.listenTo(this.model, 'update', this.render);
        this.$el.addClass('contact-card');
        this.$el.addClass('columns');

    },

    render: function(){
        var compiledTemplate = this.template(this.model.toJSON());
        this.$el.html(compiledTemplate);
        return this;
    }

});

export default ContactView;
