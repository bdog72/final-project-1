import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return <div className='flex-container'>
      <header>
        <img src='http://dolcecarini.com/wp-content/uploads/2014/07/Cheeseburger.jpg' height='100' width='100' />
        <h1>Restaurants</h1>
        <img src='http://dolcecarini.com/wp-content/uploads/2014/07/Cheeseburger.jpg' height='100' width='100' />
      </header>
      <div className='main1'>
        <nav>
          <ul>
            <li><Link to='/restaurants'>Click Here</Link></li>
            <li><a href='#'>Food</a></li>
            <li><a href='#'>Food</a></li>
            <li><a href='#'>Food</a></li>
            <li><a href='#'>Food</a></li>
          </ul>
        </nav>
        <article className='article'>
          <h2>Restaurants I enjoy!</h2>
          <img src='https://s-media-cache-ak0.pinimg.com/originals/a1/b7/fa/a1b7fab49203c1a8a7d0bf87da5b2cd2.jpg' width='700' height='300' />
        </article>
      </div>
      <main>
        {this.props.children}
      </main>
      <footer>Made with care at The Iron Yard</footer>
    </div>
  }
}
