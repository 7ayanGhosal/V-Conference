import React, { Component } from 'react';
import './Layout.css';
import Navbar from '../../Components/Navbar/Navbar';
import Search from '../../Components/Search/Search';
import WebApps from '../../Components/WebApps/WebApps';
import Footer from '../../Components/Footer/Footer';
import Aux from '../../hoc/Auxiliary';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navbar/>
        <div class="w-75 mt-4 join">
          <p class="Search">Have Your Meeting ID? Join Here</p>
          <Search/>
        </div>
        <div class="container-fluid mt-4 ml-2"><p class="join-host">Join/Host a Meeting from your favourite app now!</p></div>
        <WebApps/>
        <Footer/>
      </Aux>
    );
  }
}

export default Layout;