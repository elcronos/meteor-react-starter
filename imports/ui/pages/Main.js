import React from 'react'
import Counter from '/imports/ui/components/Counter'

export default class Main extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <Counter />
      </div>
    )
  }
}
