import React, { Component } from 'react'
import SearchTerm from './SearchTerm'
import SubmitTerm from './SubmitTerm'
import WordList from './WordList'
import TermDef from './TermDef'
import styles from '../styles/App.scss'

const token = 'example'

class App extends Component {
  componentDidMount () {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=${token}'
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({
        terms: data
      })
    })
  }
  render () {
    return <div className={styles.App}>
        <div>
          <h1>jabberdexicon</h1>
          <SearchTerm />
          <SubmitTerm />
          <WordList />
          <TermDef term={this.state.active.term} def={this.state.active.definition} />
        </div>
      </div>
  }
}

export default App
