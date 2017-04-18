import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class WordList extends Component {
  state = {
    terms: []
  }
  componentDidMount () {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=example'
    window.fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          terms: data
        })
      })
  }
  render () {
    const terms = this.state.terms.map((term) => {
      const { id, word, definition} = term
      return <li key={id}>
        <NavLink activeClassName={styles.active}
          to={`/url/${id}`}>
          {terms}
        </NavLink>
      </li>
    })
    return <ul className='styles.WordList'>

    </ul>
  }
}

export default WordList
