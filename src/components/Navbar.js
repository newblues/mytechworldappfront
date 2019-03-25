import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const style={
  container:{
    fontFamily: 'Montserrat', 
    fontSize: '14px',
    fontWeight: 'bold',
    width: '100%',
  },
  brand:{
    color: '#FC5C57',
  },
}

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state={
        isOpen: false
    };    
  }
    
 
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      
        <Navbar id='navbar' style={style.container} className='fixed-top' color="light" light expand="md">
          <NavbarBrand style={style.brand} href="/">My tech World</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#">The projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">TOP 3 / Selected : {this.props.count} </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

    );
  }
}


function mapStateToProps(state) {
  return { count: state.count }
 }
 
 export default connect(
   mapStateToProps, 
   null
 )(NavBar);

