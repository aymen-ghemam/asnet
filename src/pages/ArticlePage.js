import React from 'react'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'

const ArticlePage = () => {
  return (
    <section className='articles'>
      <div className='header flex'>
        <h1>This is a title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus mi mi, eu porttitor justo suscipit pretium. Integer non facilisis</p>
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