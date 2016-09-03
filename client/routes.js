import React from 'react'
import { mount } from 'react-mounter'
import { Meteor } from 'meteor/meteor'
import MainLayout from '/imports/ui/layouts/MainLayout'
import Main from '/imports/ui/pages/Main'

//Public Routes

FlowRouter.route("/", {
  action: function() {
      mount(MainLayout, {
        nav: () => (<Main/>),
        content: () => ("CONTENT"),
        footer: () =>("FOOTER")
      });
  }
});
