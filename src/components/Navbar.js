import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

export default class Navbar extends Component {
    render() {
        return (
            <Nav className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                <Link to='/'>
                    <span className='navbar-brand'>

                <i className="fas fa-mobile-alt fa-2x"></i>
                    </span>
                </Link>
                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-2'>
                        <Link to='/' className="nav-link">
                            Phone Store
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <button className='nav-btn'>
                        <i className="fa fa-cart-plus mr-2" aria-hidden="true"></i>
                                MyCart
                    </button>
                </Link>
            </Nav>
        )
    }
}
const Nav = styled.nav`
  background: var(--lightBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;
