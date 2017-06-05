import Backbone from 'backbone';
import _ from "underscore";
import $ from "jquery";
import ContactView from "./contact_view";

var RolodexView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;
    this.modalTemplate = params.modalTemplate;
    this.listenTo(this.model, "update", this.render);
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
    "click": "hideDetail"
  },

  addContact: function(e){
    var formData = this.readContactForm();
    console.log("formData: " + formData);
    this.model.add(formData);
    console.log(this.$("#name"));
  },

  showDetailHandler: function(data){
    var renderedTemplateHTML = this.modalTemplate(data.toJSON());
    this.$("#contact-details").html(renderedTemplateHTML).show();
    console.log("success!!!");
    console.log(this.model);
  },

  hideDetail: function(e){
    console.log("here");
    this.$("#contact-details").hide();
  },

  clearForm: function(e){
    $("#name").val("");
    $("#email").val("");
    $("#phone").val("");
  },

  readContactForm: function(){
    var nameData = this.$("#name").val();
    console.log(nameData);
    $("#name").val("");

    var emailData = this.$("#email").val();
    console.log(emailData);
    $("#email").val("");

    var phoneData = this.$("#phone").val();
    console.log(phoneData);
    $("#phone").val("");

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
    return formData;
  }
});


export default RolodexView;
