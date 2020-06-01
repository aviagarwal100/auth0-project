import React,{Component} from "react";
import {Navbar,Nav} from "react-bootstrap";



class Header extends Component {
  onLogin(){
    this.props.onLogin();
  }
  onLogout(){
    this.props.onLogout();
  }
  render(){
    let page;
    if(this.props.idToken){
      page=<Nav.Link onClick={this.onLogout.bind(this)}>Logout</Nav.Link>
    }
    else{
      page=<Nav.Link onClick={this.onLogin.bind(this)}>Login</Nav.Link>
    }
    return(
      <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
              Github Searcher
            </Navbar.Brand>
          <Nav>
            {page}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
