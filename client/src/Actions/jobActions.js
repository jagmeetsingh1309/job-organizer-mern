import axios from 'axios';
import { 
    GET_JOBS,
    ADD_JOB,
    GET_JOB,
    EDIT_JOB,
    FILTER_JOBS
} from '../Actions/action-types';

import moment from 'moment';

export const getJobs = () => {
    return async function(dispatch,getState){
        //get the token from local storage.
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token 
            }
        }
        const response = await axios.get('/jobs',config);
        dispatch({
            type: GET_JOBS,
            payload: response.data.jobs
        });
    }
};

export const filterJobs = (filter) => {
    return async function(dispatch,getState){
        let jobs = getState().jobs.jobs;
        let filteredJobs = jobs.filter(job => job.status === filter);
        dispatch({
            type: FILTER_JOBS,
            payload: filteredJobs
        })
    }
}

export const addJob = (job) => {
    return async function(dispatch,getState){
        const token = localStorage.getItem('token');
        const body = JSON.stringify(job);
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.post('/add-job',body,config);
        dispatch({
            type: ADD_JOB,
            payload: response.data
        });
    }
};

export const getJob = (jobId) => {
    return async function(dispatch,getState){
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        const response = await axios.get(`/job/${jobId}`,config);
        let formatedAppliedOn = moment(response.data.job.appliedOn).format('YYYY-MM-DD');
        dispatch({
            type: GET_JOB,
            payload: {
                ...response.data.job,
                appliedOn: formatedAppliedOn
            }
        });
    }
};

export const editJob = (job) => {
    return async function(dispatch,getState){
        const token = localStorage.getItem('token');
        const body = JSON.stringify(job);
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.put(`/job/${job._id}/edit`,body,config);
        let formatedAppliedOn = moment(response.data.job.appliedOn).format('YYYY-MM-DD');
        dispatch({
            type: EDIT_JOB,
            payload: {
                ...response.data.job,
                appliedOn: formatedAppliedOn
            }
        });
    }
};