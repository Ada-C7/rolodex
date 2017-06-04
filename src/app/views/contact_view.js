import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact';
// import RolodexView from ''

const ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.contact = params.contact;
    // console.log("This is the contact params" + params.contact);


    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());

    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click ' : 'showModal'
  },
  showModal: function(event) {

    event.stopPropagation();
    this.trigger("selected", this);
    console.log("I am showing!");
    //     var modalHtml = this.modalTemplate(this.model.toJSON());
    // console.log("HEEEYY " + modalHtml);
    //     $('.contact-card').append(modalHtml);
    // this.modal.show();
  }
});

export default ContactView;
