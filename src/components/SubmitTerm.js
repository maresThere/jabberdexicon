import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class SubmitTerm extends Component {
  state = {
    item: []
  }
  addItem (newTerm, newDefinition) {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=${token}'
    window.fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        entry: {
          term: newTerm,
          definition: newDefinition
        }
      })
    }).then(r => r.json())
      .then(data => {
        console.log(data)
      })
  }
  _submit = (event) => {
    event.preventDefault()
    this.addItem(this.refs.term.value, this.refs.definition.value)
    const word = this.refs.term
    const def = this.refs.definition
    word.value = ''
    def.value = ''
  }
  render () {
    return <div>
      <form className='submitTerm' onSubmit={this._submit}>
        <input type='text' ref='term' />
        <textArea type='text' ref='definition' rows='3'cols='50' />
        <input type='submit' value='Submit' />
      </form>
    </div>
  }
}

export default SubmitTerm
