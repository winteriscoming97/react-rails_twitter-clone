import React from 'react'
import ReactDOM from 'react-dom'
import { safeCredentials, handleErrors } from '@utils/fetchHelper';
import { createUser } from '@utils/ajaxHelper';
import $ from 'jquery';
import './home.scss';

const Home = props => (
  <div className="container-fluid">
    <div className="row bg-primary">
      <div className="container row py-3 mx-auto pl-5">
        <span className="col-1"><i className="fab fa-twitter"></i></span>
        <input type="text" className="col-5 mr-5 border-0 rounded" placeholder="Search..."/>
        <button type="button" className="btn btn-secondary col-2 mx-3">Login</button>
        <button type="button" className="btn btn-light col-2">Sign-up</button>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-11"></div>
        <span className="col-1"></span>
        <nav className="row flex-nowrap col-12 col-lg-7 mx-4">
          {/*fillable tag data for filtering tweets*/}
          <button type="button" className="btn btn-lg nav-link col-2">Popular</button>
          <button type="button" className="btn btn-lg nav-link col-2">Whales</button>
          <button type="button" className="btn btn-lg nav-link col-2">Bees</button>
          <button type="button" className="btn btn-lg nav-link col-2">Cool</button>
          <button type="button" className="btn btn-lg nav-link col-2">Food</button>
          <button type="button" className="btn btn-lg nav-link col-2">Movies</button>
          <button type="button" className="btn btn-lg nav-link col-2">Nature</button>
        </nav>
          {/*placeholder and post point of entry*/}

        <div className="col-4">
          <form className="d-none d-lg-flex flex-column">
            <input type="text" className="" placeholder="Enter Username or Email"/>
            <input type="text" className="" placeholder="Enter Password"/>
          </form>
        </div>
      </div>
    </div>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
