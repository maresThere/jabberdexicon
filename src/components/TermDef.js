import React, { Component } from 'react'

class TermDef extends Component {
  render () {
    return <div className='TermDef'>
      <h3>Term: {this.props.term}</h3>
      <p>Definition: {this.props.definition}</p>
    </div>
  }
}

export default TermDef
