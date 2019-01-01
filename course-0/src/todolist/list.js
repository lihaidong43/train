import React from 'react'
import PropTypes from 'prop-types'

export default class List extends React.Component {
  static defaultProps = {
    todos : PropTypes.array.isRequired
  }

  static defaultProps = {
    todos : []
  }

  done = (e) => {
    const target = e.target;
    if(target.value === 'on'){
      target.parentNode.style.textDecoration = 'line-through'
    }
  }

  render(){
    const {todos } = this.props
    return todos.length > 0  && (<ul>
        {todos.map((todo,index) => 
          <li key={index} className={index+1 === todos.length ? 'last' : ''}>
            {/* <input type='checkbox'/> */}
            <input type = 'checkbox' className='done' onChange={(e) => this.done(e)}/>{todo}
          </li>)}
      </ul> || null
    )
  }
}