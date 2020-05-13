import styled from 'styled-components';

export const Input = styled.input`
    padding: 1rem 0.5rem;
    outline: none;
    border: 2px solid ${props => props.borderColor};
    border-radius: 5px;
    width: 100%;
`;

export const Select = styled.select`
    width: 100%;
    padding: 1rem 0.5rem;
    -webkit-appearence: none;
    outline: none;
    line-height: 1.5;
    border: 2px solid #d4d2d2;
    border-radius: 5px;
`;