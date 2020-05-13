import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    text-align: center;
    background: ${props => props.bgColor ? props.bgColor : '#7410e6'};
    border-radius: 5px; 
    color: white;
    border: none;
    outline: none;
    padding: 0.75rem 1.5rem;
    margin-top: 1rem;
    cursor: pointer;
`;

export const ButtonLink = styled.div`
    a{
        padding: 0.5rem 2rem;
        text-align: center;
        background: #7410e6;
        border-radius: 5px; 
        color: white;
        border: none;
        outline: none;
        text-decoration: none;
    }
   
    a:hover{
        border: 2px solid #7410e6;
        color: #7410e6;
        background: white;
        transition: background 0.3s;
        cursor: pointer;
    }
`;

export const BorderedButton = styled.button`
    padding: 0.5rem 1rem;
    border: 3px solid ${props => props.color };
    background: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;

    &:hover{
        background: ${props => props.color };
        color: white;
        transition: background 0.4s;
    }
`;

export const NavLink = styled.div`
    display: inline-block;
    a{
        text-decoration: none;
        display: block;
        color: blue;
        font-size: 1.1rem;
        padding: 0.5rem 1rem;
        border-radius: 5px;
    }
    &:hover a{
        color: white;
        background: blue;
        cursor: pointer;
        transition: background 0.3s;
    }
`;

export const BrandLink = styled(NavLink)`
    a{
        font-size: 1.3rem;
    }
`;