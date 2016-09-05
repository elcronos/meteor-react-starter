import React from 'react'
import { Navbar, ButtonToolbar, Button } from 'react-bootstrap'
import LogoBrand from '/imports/ui/components/LogoBrand'
import NavbarCollapse from '/imports/ui/components/NavbarCollapse'
import { ActiveRoute } from 'meteor/zimme:active-route'

export default class NavMenu extends React.Component{

  constructor(){
    super()
    this.handleClick= this.handleClick.bind(this)

    this.state = {
      activeButton: 'home'
    }
  }

  componentDidMount(){
    //For initial render
  }

  handleClick(event){
    console.log('onClick:'+event.target.id)
    let route= event.target.id.replace('button-menu-','/')
    if(route=='/home'){route='/'}
    // Go to Route
    FlowRouter.go(route);
    //Active Button
    if(route=='/'){route='home'}
    else{route=route.replace('/','')}
    this.setState({activeButton:route})
  }

  renderNavbar(){
    //Button Style Default

    if(this.props.active){
      //Button Style Active

    }
    return (<Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <LogoBrand width="60" height="60"/>
                  <Navbar.Text id="brand-text">
                    Chumz
                  </Navbar.Text>
                </Navbar.Brand>
                <ButtonToolbar id="nav-button-toolbar">
                  <Button onClick={this.handleClick} id="button-menu-home" className={(this.state.activeButton === 'home') ? 'button-menu-active':'button-menu'}>Home</Button>
                  <Button onClick={this.handleClick} id="button-menu-about" className={(this.state.activeButton === 'about') ? 'button-menu-active':'button-menu'}>About Us</Button>
                  <Button onClick={this.handleClick} id="button-menu-contact" className={(this.state.activeButton === 'contact') ? 'button-menu-active':'button-menu'}>Contact Us</Button>
                  <Button onClick={this.handleClick} id="button-menu-uihelp" className={(this.state.activeButton === 'uihelp') ? 'button-menu-active':'button-menu'}>UI Help</Button>
                </ButtonToolbar>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <NavbarCollapse />
              </Navbar.Collapse>
            </Navbar>);
  }

  render(){
    return(
      <div>
        { this.renderNavbar() }
      </div>
    )
  }
}
