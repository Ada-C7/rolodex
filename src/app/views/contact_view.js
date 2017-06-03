//contact_view

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';


const ContactView = Backbone.View.extend({
    initialize: function(params){
        //need to add more stuff here about adding class and listening events
        this.template = params.template;
        this.detailsTemplate = params.detailsTemplate;
        this.listenTo(this.model, 'update', this.render);
    },

    render: function(){
        var contactHTML = this.template(this.model.toJSON());
        this.$el.html(contactHTML);
        return this;
    },

    events: {
        'click li': 'cardDetails'
    },

    renderCardDetails: function(){
        var detailsHTML = this.detailsTemplate(this.model.toJSON());
        return detailsHTML;
    },

    cardDetails: function(){
        this.trigger('selected', this);
    }
});

export default ContactView;
