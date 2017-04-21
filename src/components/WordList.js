import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/WordList.scss'

class WordList extends Component {
  render () {
    const showTerm = this.props.entries.map((word) => {
      return <p key={word.id}>{word.term} </p>
    })
    return <div className={styles.WordList}>
      {showTerm}
    </div>
  }
}

export default WordList
