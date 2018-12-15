import React from 'react'
import Father from './father'
import './index.css'

export default class Grandapa extends React.Component {
  state = {
    msg : ''
  }
  receiveMsg = (from,msg) =>{
    this.setState({msg :  msg || 'empty',from : from})    
  }
  render(){
    const {from,msg} = this.state
    return <div className='grandapa'>
        Grandapa {msg && <span>receive a msg from  <i className='from'> {from} </i>  msg : <i className='msg'> {msg} </i></span>}
        <Father receiveMsg={this.receiveMsg}/>
      </div>
  }
}