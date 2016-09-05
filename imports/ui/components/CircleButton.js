import React from 'react'

export default CircleButton = ({btnCircle,classIcon}) => (
  <div>
    <button type="button" className={btnCircle}><i className={classIcon}></i></button>
  </div>
)
