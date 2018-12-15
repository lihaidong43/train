import React from 'react'
import PropTypes from 'prop-types'

export default class Input extends React.Component {

  static dfaultProps = {
    add : PropTypes.func
  }

  add = (e) => {
    if(e.keyCode == 13){
      const {add} = this.props
      if(add) {
        add(e.target.value)
        e.target.value = ''
      }
    }
  }

  render(){
    return (
    <div className='input'>
      <input type = 'text' size = '20' placeholder='+ 添加任务，回车' ref='input' onKeyDown={this.add}/>  
    </div>
    )
  }
}