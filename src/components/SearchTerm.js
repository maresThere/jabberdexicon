import React, { Component } from 'react'
import styles from '../styles/SearchTerm.scss'

class SearchTerm extends Component {
  render () {
    return <div className={styles.SearchTerm}>
      <form>
        <h4>Type a term to search here:</h4>
        <input type='text' size='50' placeholder='Term to Search' />
        <input type='submit' />
      </form>
    </div>
  }
}

export default SearchTerm
