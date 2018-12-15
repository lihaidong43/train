import React from 'react'
import ReactDom from 'react-dom'
import Grandapa from './course-0/src/communication/grandapa'

const Index = () => {
  return(
    <Grandapa/>
  )  
}


ReactDom.render(<Index/>,document.getElementById('index'))