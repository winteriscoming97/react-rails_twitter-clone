import React from 'react'
import ReactDOM from 'react-dom'

import './home.scss';

const Home = props => (
  <div>
    <h1 className="display-none">Home page</h1>
    <h2>Page of the home</h2>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
