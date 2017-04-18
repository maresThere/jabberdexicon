import React, { Component } from 'react'

class SearchTerm extends Component {
  render () {
    return <div className='SearchTerm'>
      <form className='searchForTerm'>
        <input type='text' size='50' placeholder='Term to Search' />
        <button>Search It</button>
      </form>
    </div>
  }
}

export default SearchTerm
