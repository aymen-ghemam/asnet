import React from 'react'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'

const ArticlePage = () => {
  return (
    <section className='articles'>
      <div className='header'>
        {/* <img src="/assets/waves.svg" alt="" /> */}
      </div>
      <SearchBar />
      <div className='flex list'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

      </div>
    </section>
  )
}

export default ArticlePage