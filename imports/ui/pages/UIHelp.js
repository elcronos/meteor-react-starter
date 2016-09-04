import React from 'react'
import { Button } from 'react-bootstrap'
import CircleButton from '/imports/ui/components/CircleButton'

export default class UIHelp extends React.Component{
  constructor(){
    super()
    this.handleClickButton = this.handleClickButton.bind(this)
  }

  handleClickButton(event){
    alert('Hello '+ event.target.id)
  }


  render(){
    let codeImport="import { Button } from 'react-bootstrap'"
    let circleImport="import CircleButton from '/imports/ui/components/CircleButton'"

    let code='<Button onClick={this.handleClickButton} className="btn-primary">Primary</Button>'
    let codeCall='<Button onClick={this.handleClickButton} className="btn-call-to-action">Call to Action</Button>'
    let codeCallSecondary='<CircleButton id="circle-button" btnCircle="btn btn-call-to-action btn-circle" classIcon="zmdi zmdi-chevron-up zmdi-hc-2x"/>'



    primaryButton = <div><h4>Primary Buttons | color: #ff6624 | className: btn-primary</h4>
                          <span>Imports:</span><br/>
                          <code>{codeImport}</code><br/>
                          <span>Code:</span><br/>
                          <code>{code}</code><br/>
                          <span>Example:</span><br/>
                          <Button id="btn-primary" onClick={this.handleClickButton} className="btn-primary">Primary</Button>
                          </div>;

    callToActionButton = <div><h4>Call To Action Button | className: btn-call-to-action</h4>
                         <span>Imports:</span><br/>
                         <code>{codeImport}</code><br/>
                         <span>Code:</span><br/>
                         <code>{codeCall}</code><br/>
                         <span>Example:</span><br/>
                         <Button id="btn-call-to-action" onClick={this.handleClickButton} className="btn-call-to-action">Call to Action</Button>
                         </div>;

    callToActionSecondaryButton = <div><h4>Call To Action Button Secondary | className: btn-call-to-action</h4>
                         <span>Imports:</span><br/>
                         <code>{codeImport}</code><br/>
                         <span>Code:</span><br/>
                         <code>{codeCallSecondary}</code><br/>
                         <span>Example:</span><br/>
                         <Button bsSize="large" id="btn-call-to-action-secondary" onClick={this.handleClickButton} className="btn-call-to-action-secondary">Call to Action</Button>
                         </div>;

    circleButton =       <div><h4>Circle Button | className: keyboard_arrow_down |</h4>
                         Material Design Icons Documentation: <a href='https://atmospherejs.com/ixdi/material-design-iconic-font'>Documentation</a><br/>
                         Cheatsheet: <a href='http://zavoloklom.github.io/material-design-iconic-font/cheatsheet.html'>Icon List</a><br/>
                         <span>Imports:</span><br/>
                         <code>{circleImport}</code><br/>
                         <span>Code:</span><br/>
                         <code>{codeCallSecondary}</code><br/>
                         <span>Example:</span><br/>
                         <CircleButton id="circle-button" btnCircle="btn btn-call-to-action btn-circle" classIcon="zmdi zmdi-chevron-up zmdi-hc-2x"/>
                         <CircleButton id="circle-button" btnCircle="btn btn-call-to-action btn-circle" classIcon="zmdi zmdi-chevron-down zmdi-hc-2x"/>
                         <CircleButton id="circle-button" btnCircle="btn btn-call-to-action btn-circle" classIcon="zmdi zmdi-chevron-right zmdi-hc-2x"/>
                         <CircleButton id="circle-button" btnCircle="btn btn-call-to-action btn-circle" classIcon="zmdi zmdi-chevron-left zmdi-hc-2x"/>

                         <CircleButton id="circle-button" btnCircle="btn btn-call-to-action btn-circle btn-lg" classIcon="zmdi zmdi-chevron-up zmdi-hc-2x"/>
                         <CircleButton id="circle-button" btnCircle="btn btn-call-to-action btn-circle btn-lg" classIcon="zmdi zmdi-chevron-down zmdi-hc-2x"/>
                         <CircleButton id="circle-button" btnCircle="btn btn-call-to-action btn-circle btn-lg" classIcon="zmdi zmdi-chevron-right zmdi-hc-2x"/>
                         <CircleButton id="circle-button" btnCircle="btn btn-call-to-action btn-circle btn-lg" classIcon="zmdi zmdi-chevron-left zmdi-hc-2x"/>

                         <CircleButton id="circle-button" btnCircle="btn btn-call-to-action btn-circle btn-xl" classIcon="zmdi zmdi-chevron-up zmdi-hc-2x"/>
                         <CircleButton id="circle-button" btnCircle="btn btn-call-to-action btn-circle btn-xl" classIcon="zmdi zmdi-chevron-down zmdi-hc-2x"/>
                         <CircleButton id="circle-button" btnCircle="btn btn-call-to-action btn-circle btn-xl" classIcon="zmdi zmdi-chevron-right zmdi-hc-2x"/>
                         <CircleButton id="circle-button" btnCircle="btn btn-call-to-action btn-circle btn-xl" classIcon="zmdi zmdi-chevron-left zmdi-hc-2x"/>
                         </div>;

    return(
      <div className="well">
        <h1>UI GUIDE</h1>
        <h2>Components</h2><br/><br/>
        <h3>Buttons</h3><br/>
        {primaryButton}
        {callToActionButton}
        {callToActionSecondaryButton}
        {circleButton}
      </div>
    )
  }
}
