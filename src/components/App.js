import React, { Component } from 'react'
import SearchTerm from './SearchTerm'
import SubmitTerm from './SubmitTerm'
import WordList from './WordList'
import TermDef from './TermDef'
import styles from '../styles/App.scss'

const token = 'example5'

class App extends Component {
  state = {
    item: [],
    entries: [],
    search: [],
    clicked: []
  }
  loadWords () {
    const url = `https://jabberdexicon.herokuapp.com/entries?access_token=${token}`
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({
        entries: data
      })
    })
  }
  componentDidMount () {
    this.loadWords()
  }

  addItem = (newTerm, newDefinition) => {
    const url = `https://jabberdexicon.herokuapp.com/entries?access_token=${token}`
    window.fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'entry': {
          'term': newTerm,
          'definition': newDefinition
        }
      })
    }).then(r => r.json())
      .then(data => {
        this.loadWords()
        console.log(data)
      })
  }
  // componentDidMount () {
  //   const url = `https://jabberdexicon.herokuapp.com/entries?access_token=${token}`
  //   window.fetch(url)
  //   .then(r => r.json())
  //   .then(data => {
  //     this.setState({
  //       terms: data
  //     })
  //   })
  // }
  render () {
    return <div className={styles.App}>
      <div>
        <h1>jabberdexicon</h1>
        <SearchTerm />
        <SubmitTerm addItem={this.addItem} />
        <WordList entries={this.state.entries} />
        <TermDef term={this.state.entries.term} def={this.state.entries.definition} />
      </div>
    </div>
  }
}

export default App
