import React from 'react'

import PropTypes from 'prop-types'

export default class My extends React.Component {

  static propTypes = {
    father : PropTypes.func,
    grandapa : PropTypes.func,
    brother : PropTypes.func
  }

  call = (from,person) => {
    const call = this.props[person];
    const msg = this.refs.msg
    if(call){
      call(from,msg.value)
    }
  }
  
  render(){
    return <div className='my'>
    <span>
      <span>I want to seed a msg <input type='input' size='20' ref='msg'/> to</span>
      <a href='javascript:void(0)' onClick={(e)=> this.call('son','father')}>father</a>
      <a href='javascript:void(0)' onClick={(e)=> this.call('grandason','grandapa')}>grandapa</a>
      <a href='javascript:void(0)' onClick={(e)=> this.call('brother','brother')}>brother</a>
    </span>
     </div>
  }
}