import Backbone from 'backbone';
import _ from "underscore";
import $ from "jquery";
import ContactView from "./contact_view";

var RolodexView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;
    this.detailTemplate = params.detailTemplate;
    this.editTemplate = params.editTemplate;
    this.listenTo(this.model, "update", this.render);
    this.currentContact = null;
  },
  render: function(){
    var self = this;
    self.$("#contact-cards").empty();
    // console.log(this.model);

    this.model.each(function(contact) {
      var view = new ContactView({
        model: contact,
        template: self.template
      });
      self.$('#contact-cards').append(view.render().$el);
      self.listenTo(view, "showDetail", self.showDetailHandler);
    });


    return this;
  },

  events: {
    "click .btn-save": "addContact",
    "click .btn-cancel": "clearForm",
    "showDetail": "showDetail",
    "click": "hideDetail",
    "click #edit-button": "editContact",
    "click #btn-update": "update"
  },

  addContact: function(e){
    var formData = this.readContactForm();
    console.log("formData: " + formData);
    this.model.add(formData);
    console.log(this.$("#name"));
  },

  showDetailHandler: function(data){
    var renderedTemplateHTML = this.detailTemplate(data.toJSON());
    // console.log(renderedTemplateHTML);
    this.$("#contact-details").html(renderedTemplateHTML).show();
    this.currentContact = data;
    // console.log("success!!!");
    // console.log(this.model);
  },

  hideDetail: function(e){
    this.$("#contact-details").hide();
  },

  editContact: function(e){
    // console.log("Working!");
    event.stopPropagation();
    var renderedTemplateHTML = this.editTemplate(this.currentContact.toJSON());
    // console.log(renderedTemplateHTML);
    this.$("#edit-contact").html(renderedTemplateHTML).show();
  },


  clearForm: function(e){
    $("#name").val("");
    $("#email").val("");
    $("#phone").val("");
  },

  readContactForm: function(){
    var nameData = this.$("#edit-name").val();
    console.log(nameData);
    // $("#name").val("");

    var emailData = this.$("#edit-email").val();
    console.log(emailData);
    // $("#email").val("");

    var phoneData = this.$("#edit-phone").val();
    console.log(phoneData);
    // $("#phone").val("");

    var formData = {};
    if (nameData && nameData != "") {
      formData["name"] = nameData
    }
    if (emailData && emailData != "") {
      formData["email"] = emailData
    }
    if (phoneData && phoneData != "") {
      formData["phone"] = phoneData
    }
    this.clearForm();
    return formData;
  }
});


export default RolodexView;
