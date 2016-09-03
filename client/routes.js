import React from 'react'
import { mount } from 'react-mounter'
import { Meteor } from 'meteor/meteor'

//Public Routes

authenticatedRoutes.route("/", {
  name: 'home',
  action: function() {
      mount(MainLayout, {
        nav: () => (<NavMenu/>),
        content: () => ("CONTENT")
      });
  }
});
