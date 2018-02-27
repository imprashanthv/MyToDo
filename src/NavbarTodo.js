import React, { Component } from "react";

import {
  Badge,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';

class NavbarTodo extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Navbar color="faded" light expand="md" className="bs-navbar-collapse">
          <Badge color="secondary">TODO</Badge>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="md-auto" navbar>
              <NavItem>
                <NavLink href="#" onClick={this.props.clicked} >About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );
  }
}

export default NavbarTodo;
