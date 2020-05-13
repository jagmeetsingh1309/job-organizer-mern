import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { NavLink,BrandLink } from '../elements/Button';
import { logoutUser } from '../../Actions/authActions';

const FlexContainer = styled.div`
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

const NavLinks = styled.div`
    display: flex;
`;

class Navbar extends React.Component{

    render(){
        return (
            <FlexContainer>
                <BrandLink><Link to="/">Applyist</Link></BrandLink>
                {!this.props.isLoggedIn ? (
                    <NavLinks>
                        <NavLink><Link to="/">Home</Link></NavLink>
                        <NavLink><Link to="/login">Login</Link></NavLink>
                        <NavLink><Link to="/signup">Signup</Link></NavLink>
                    </NavLinks>
                ): (
                    <NavLinks>
                        <NavLink><Link to="/dashboard">{this.props.email}</Link></NavLink>
                        <NavLink><Link to="/" onClick={this.props.logoutUser}>Logout</Link></NavLink>
                    </NavLinks>
                )} 
            </FlexContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps,{
    logoutUser: logoutUser
})(Navbar);