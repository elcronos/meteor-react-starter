import React from 'react'
import { FormControl,FieldGroup, Form, Button } from 'react-bootstrap'
import Counter from '/imports/ui/components/Counter'

export default class CounterContainer extends React.Component{

  constructor(){
    super()
    this.handleClick= this.handleClick.bind(this)
    this.handleChange= this.handleChange.bind(this)

    this.state = {
      email: ''
    }
  }
  handleClick(){

  }
  handleChange(){

  }
  render() {
    return(
      <div className="container-counter">
          <div className="layer">
            <Counter />
            <Form horizontal>
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Text"
                placeholder="Enter text"
                />

              <Button type="submit" onClick={this.handleClick} className="btn-call-to-action-secondary">Notify me</Button>
            </Form>
            <br/>
            <CircleButton id="circle-button" btnCircle="btn btn-call-to-action btn-circle btn-lg" classIcon="zmdi zmdi-chevron-down zmdi-hc-2x"/>
          </div>
      </div>
    )
  }
}
