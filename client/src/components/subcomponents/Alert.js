import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const AlertWrapper = styled.div`
    padding: 1rem 1.5rem;
    width: 40%;
    margin: 0 auto;
    border: 2px solid ${props => props.color};
    border-radius: 10px;
    margin-bottom: 1rem;
    color: ${props => props.color };
    background: ${props => props.bgColor };
    text-align: center;
`;


const Alert = ({ alert }) => {
    let alertList = alert.map(alert => {
        let color = alert.type === 'danger' ? '#fa0000' : 'green';
        let bgColor = alert.type === 'danger' ? '#fa8787' : 'white';
        return <AlertWrapper key={alert.id} color={color} bgColor={bgColor} >{alert.msg}</AlertWrapper>;   
    });
    if(alert.length > 0){
        return alertList;
    } 
    return null;
}

const mapStateToProps = (state) => {
    return {
        alert: state.alert
    }
}

export default connect(mapStateToProps)(Alert);