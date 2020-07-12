import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import WebApps from '../../Components/WebApps/WebApps';

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <WebApps/>
      </div>

      
    );
  }
}

export default Layout;