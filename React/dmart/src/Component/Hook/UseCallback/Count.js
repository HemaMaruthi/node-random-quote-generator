import React from 'react'

function Count(props) {
    console.log(`This is Count Component ${props.name}`)
  return (
    <div>
        Count is : {props.name}
    </div>
  )
}

export default  React.memo(Count);