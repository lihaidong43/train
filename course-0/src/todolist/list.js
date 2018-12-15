import React from 'react'
import PropTypes from 'prop-types'

export default class List extends React.Component {
  static defaultProps = {
    todos : PropTypes.array.isRequired
  }

  static defaultProps = {
    todos : []
  }

  render(){
    const {todos } = this.props
    return todos.length > 0  && (<ul>
        {todos.map((todo,index) => <li key={index} className={index+1 === todos.length ? 'last' : ''}>{todo}</li>)}
      </ul> || null
    )
  }
}