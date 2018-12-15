import React from 'react'
import My from './my'
import Brother from './brother'
export default class Father extends React.Component {
  state = {
    msg : null
  }

  receiveMsg = (from,msg) =>{
    this.setState({msg :  msg || 'empty',from : from})
  }

  transfer = (from,msg) => {
    this.setState({transferFrom : from , transferMsg : msg})
  }

  render(){
    const {from,msg,transferFrom,transferMsg} = this.state
    return <div className='father'> Father {msg && <span>receive a msg from  <i className='from'> {from} </i>  msg : <i className='msg'> {msg} </i></span>}
      <div className='children'>
        <My father={this.receiveMsg} grandapa={this.props.receiveMsg} brother={this.transfer}/>
        <Brother from={transferFrom} msg={transferMsg}/>
      </div>
    </div>
  }
}