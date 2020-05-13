import React from 'react';
import JobCard from './JobCard';
import styled from 'styled-components';

const Header = styled.h2`
    grid-column: 2 / span 8;
`;

const JobList = ({ jobs }) => {
    if(jobs.length > 0){
        return jobs.map(job => {
            return <JobCard key={job._id} job={job}/>
        });
    } else {
        return <Header>No jobs found.</Header>;
    }
};

export default JobList;