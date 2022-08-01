
import React, { Component } from "react";

export default class navbar extends Component {
  //static propTypes = {second: third}

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Todays! Update
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                  Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    About
                  </a>

                </li>
                
                <li className="nav-item "><a href="" className="nav-link">business</a></li>
                <li className="nav-item "><a href="" className="nav-link">entertainment</a></li>
                <li className="nav-item "><a href="" className="nav-link">genral</a></li>
                <li className="nav-item "><a href="" className="nav-link">health</a></li>
                <li className="nav-item "><a href="" className="nav-link">science</a></li>
                <li className="nav-item "><a href="" className="nav-link">sports</a></li>
                <li className="nav-item "><a href="" className="nav-link">technology</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
