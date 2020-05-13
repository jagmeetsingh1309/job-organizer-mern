import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    background: #f0edeb;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    border-left: 7px solid ${props => props.borderColor};
    grid-column: 2 / span 8;
    justify-content: space-between;
    align-items: center;
    @media(max-width:500px){
        flex-wrap: wrap;
        grid-column: 2 / span 10;
    }
`;

export default Card;