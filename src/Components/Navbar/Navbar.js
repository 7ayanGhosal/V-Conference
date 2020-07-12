import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';

class Navbar extends Component {
  render() {

    return (
        <Aux>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">V-Conference</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Host Webinar</a>
                  </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                  <button class="btn btn-outline-success my-2 my-sm-0 mr-2" type="submit">Login</button> 
                  <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Signup</button>
                </form>
              </div>
            </nav>
        </Aux>
    );
  }
}

export default Navbar;