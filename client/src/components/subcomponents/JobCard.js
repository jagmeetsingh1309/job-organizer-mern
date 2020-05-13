import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { getJob } from '../../Actions/jobActions';
import { ButtonLink } from '../elements/Button';
import Card from '../elements/Card';

const FlexContainer = styled.div`
    display: flex;
    p{
        margin: 1rem 1rem 0 0;
    }
    flex-wrap: wrap;
    @media(max-width:500px){
        flex-wrap: wrap;
        justify-content: space-between;
        p {
            margin-top: 0.5rem;
        }
    }
`;

const ColorText = styled.span`
    color: ${props => props.color};
`;

const borderColor = (status) => {
    switch(status){
        case 'Applied': 
            return 'blue';
        case 'Under Review':
            return 'yellow';
        case 'Offer Received':
            return 'green';
        case 'Rejected':
            return 'red';
        default:
            return 'black';
    }
}

const JobCard = (props) => {

    const job = props.job;

    return (
        <Card borderColor={borderColor(job.status)}>
            <div className="job-description">
                <h2>{job.title}</h2>
                <FlexContainer>
                    <p><i className="far fa-building"></i> {job.company}</p>
                    <p><i className="fas fa-map-marker-alt"></i> {job.address}</p>
                    <p>
                        <i className="far fa-calendar-alt"></i> Applied on: 
                        <Moment format="YYYY/MM/DD">{job.appliedOn}</Moment>
                    </p>
                </FlexContainer>
                <p>
                    <i className="far fa-clock"></i> Status: <ColorText color={borderColor(job.status)}>{job.status}</ColorText>
                </p>
            </div>
            <div className="action-button">
                <ButtonLink><Link onClick={() => props.getJob(job._id)} to={`/edit-job/${job._id}`}>MODIFY</Link></ButtonLink>
            </div>
        </Card>
    );
}

export default connect(null,{
    getJob: getJob
})(JobCard);