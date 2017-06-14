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
    "click #btn-update": "update",
    "click #btn-cancel-edit": "hideEditForm"
  },

  addContact: function(e){
    var formData = this.readContactForm("create");
    console.log("formData: " + formData);
    this.clearForm("create");

    this.model.add(formData);
    console.log(this.$("#name"));
  },

  showDetailHandler: function(data){
    var renderedTemplateHTML = this.detailTemplate(data.toJSON());
    console.log("success!!!");
    this.$("#contact-details").show();
    console.log(renderedTemplateHTML);
    this.$("#contact-details").html(renderedTemplateHTML).show();
    this.currentContact = data;
  },

  hideEditForm: function(e){
    this.$("#edit-contact").hide();
  },

  editContact: function(e){
    // console.log("Working!");
    var renderedTemplateHTML = this.editTemplate(this.currentContact.toJSON());
    // console.log(renderedTemplateHTML);
    this.$("#edit-contact").html(renderedTemplateHTML).show();
  },

  update: function(){
    var formData = this.readContactForm("edit");
    this.currentContact.set(formData);
    this.$("#edit-contact").hide();
    console.log("Hey");
    console.log(this.currentContact);
    this.showDetailHandler(this.currentContact);
  },

  hideDetail: function(event){
    this.$("#contact-details").hide();
  },

  clearForm: function(event, formName){
    this.$(".input").val("");

  },

  readContactForm: function(formName){
    var nameData = this.$("#" + formName + "-name").val();

    var emailData = this.$("#" + formName + "-email").val();

    var phoneData = this.$("#" + formName + "-phone").val();

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
