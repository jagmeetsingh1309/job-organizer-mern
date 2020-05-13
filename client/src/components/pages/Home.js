import React from 'react';
import styled from 'styled-components';
import img from '../../ss-img.png';
import { Link } from 'react-router-dom';

import { ButtonLink } from '../elements/Button';

const FlexWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 90vh;
    @media(max-width: 500px){
        flex-wrap: wrap;
        height: 100%;
    }
`;

const Content = styled.div`
    width: 50%;
    margin-top: 5rem;
    @media(max-width: 500px){
        width: 100%;
        text-align: center;
        margin-top: 0;
        margin-bottom: 2rem;
    }
`;

const Image = styled.img`
    display: block;
    height: 80%;
    @media(max-width: 500px){
        width: 100%;
    }
`;

const Home = () => {
    return (
        <FlexWrapper>
            <Image src={img} alt="No img." />
            <Content>
                <h1>Organize Your Job Search</h1>
                <p>
                    During a job search its not uncommon to be applying to multiple companies
                    at once. Keeping this process organized can be a pain, but not to worry,
                    We are here to help. Create a free account and see if you can create a 
                    more organized search.
                </p>
                <ButtonLink><Link to="/signup">Signup for free</Link></ButtonLink>
            </Content>
            
        </FlexWrapper>
        
    );
}

export default Home;