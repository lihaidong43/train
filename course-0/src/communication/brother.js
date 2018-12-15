import React from 'react'

export default class Brother extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      from : this.props.from,
      msg : this.props.msg
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.from && nextProps.msg){
      this.setState({from : nextProps.from ,msg : nextProps.msg})
    }
  }

  render(){
    const {from,msg} = this.state
    return (
      <div className='brother'>
        Brother { msg && <span>receive a msg from  <i className='from'> {from} </i>  msg : <i className='msg'> {msg} </i></span>}
      </div>
      )
  }
}