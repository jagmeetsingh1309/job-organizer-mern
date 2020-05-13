import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BorderedButton,ButtonLink } from '../elements/Button';

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    grid-column: 2 / span 8;
    @media(max-width:500px){
        grid-column: 2/ span 10;
    } 
`;

const FilterLink = styled.button`
    text-decoration: underline;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    font-size: 1.1rem;
    color: #a6a2ab;
`;

const FilterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background: #f0f0f0;
    grid-column: 2 / span 8;
    padding: 0.5rem;
    @media(max-width: 500px){
        grid-column: 2 / span 10;
        flex-wrap: wrap;
        justify-content: center;
        align-content: space-between;
        button{
            margin: 0.75rem 0.75rem 0 0;
        }
    }
`;

class Header extends React.Component {

    state = {
        isVisible: false
    }

    onClickHandler = () => {
        this.setState({ isVisible: !this.state.isVisible });
    }
  
    render(){
        return (
            <React.Fragment>
                <FlexContainer>
                    <ButtonLink><Link to="/add-job">ADD JOB</Link></ButtonLink>
                    <FilterLink onClick={this.onClickHandler}>
                        Filter <i className="fas fa-caret-down"></i>
                    </FilterLink>
                </FlexContainer>
                { this.state.isVisible && <FilterWrapper>
                        <BorderedButton 
                            onClick={(e) => this.props.handleFilterChange(e.target.value)} color="black" value="Show All"
                        >Show All</BorderedButton>
                        <BorderedButton 
                            onClick={(e) => this.props.handleFilterChange(e.target.value)} color="blue" value="Applied"
                        >Applied</BorderedButton>
                        <BorderedButton 
                            onClick={(e) => this.props.handleFilterChange(e.target.value)} color="#f5e90a" value="Under Review"
                        >Under Review</BorderedButton>
                        <BorderedButton 
                            onClick={(e) => this.props.handleFilterChange(e.target.value)} color="green" value="Offer Received"
                        >Offer Recieved</BorderedButton>
                        <BorderedButton 
                            onClick={(e) => this.props.handleFilterChange(e.target.value)} color="red" value="Rejected"
                        >Rejected</BorderedButton>
                    </FilterWrapper>
                }
                
            </React.Fragment>
        );
    }
}

export default Header;