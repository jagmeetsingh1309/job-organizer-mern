import React from 'react';
import { connect } from 'react-redux';

import { getJobs,filterJobs } from '../../Actions/jobActions';
import JobList from '../subcomponents/JobList';
import Header from '../subcomponents/Header';
import { GridWrapper } from '../elements/Grid';

class Dashboard extends React.Component {

    componentDidMount(){
        this.props.getJobs();
    }

    handleFilterChange = (filter) => {
        if(filter === 'Show All'){
            this.props.getJobs();
        } else {
            this.props.filterJobs(filter);
        }
    }

    render(){
        return (
            <GridWrapper gap="1rem">
                <Header handleFilterChange={this.handleFilterChange} /> 
                <JobList jobs={this.props.jobs} />
            </GridWrapper>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs.filteredJobs
    }
}

export default connect(mapStateToProps,{
    getJobs: getJobs,
    filterJobs: filterJobs
})(Dashboard);