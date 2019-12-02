import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import Navbar from "./Menu/Navbar";

class Menu extends React.Component {
    state = {
      navbarOpen: false
    }

    handleNavbar = () => {
      this.setState({ navbarOpen: !this.state.navbarOpen });
    }

    render() {

      return (
        <>
          <Navbar
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar}
          />
        </>
      )
    }
  }


export default withRouter(Menu)