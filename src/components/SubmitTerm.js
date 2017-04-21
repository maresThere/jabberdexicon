import React, { Component } from 'react'
import styles from '../styles/SubmitTerm.scss'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class SubmitTerm extends Component {
  _submit = (event) => {
    event.preventDefault()
    this.props.addItem(this.refs.term.value, this.refs.definition.value)
    this.refs.term.value = ''
    this.refs.definition.value = ''
  }
  render () {
    return <div>
      <form className={styles.SubmitTerm} onSubmit={this._submit}>
        <input type='text' ref='term' placeholder='Type Term Here' />
        <textarea type='text' ref='definition' placeholder='Type Definition Here Here'rows='3'cols='50' />
        <input type='submit' value='Submit' />
      </form>
    </div>
  }
}

export default SubmitTerm
