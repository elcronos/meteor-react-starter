import React from 'react'
import { mount } from 'react-mounter'
import { Meteor } from 'meteor/meteor'
//layout
import MainLayout from '/imports/ui/layouts/MainLayout'
//components
import NavMenu from '/imports/ui/components/NavMenu'
//Pages
import Main from '/imports/ui/pages/Main'
import About from '/imports/ui/pages/About'
import Contact from '/imports/ui/pages/Contact'
import UIHelp from '/imports/ui/pages/UIHelp'

//Public Routes

//HOME
FlowRouter.route("/", {
  action: function() {
      name: 'home',
      mount(MainLayout, {
        nav: () => (<NavMenu active='home'/>),
        content: () => (<Main/>),
        footer: () =>("FOOTER")
      });
  }
});

//ABOUT
FlowRouter.route("/about", {
  action: function() {
      name: 'about',
      mount(MainLayout, {
        nav: () => (<NavMenu active='about'/>),
        content: () => (<About />),
        footer: () =>("FOOTER")
      });
  }
});
//CONTACT
FlowRouter.route("/contact", {
  action: function() {
      name: 'contact',
      mount(MainLayout, {
        nav: () => (<NavMenu active='contact'/>),
        content: () => (<Contact />),
        footer: () =>("FOOTER")
      });
  }
});

//CONTACT
FlowRouter.route("/uihelp", {
  action: function() {
      name: 'uihelp',
      mount(MainLayout, {
        nav: () => (<NavMenu active='uihelp'/>),
        content: () => (<UIHelp />),
        footer: () =>("")
      });
  }
});
