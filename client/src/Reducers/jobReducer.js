import { 
    GET_JOBS,
    ADD_JOB,
    FILTER_JOBS,
    GET_JOB,
    EDIT_JOB
} from '../Actions/action-types';

const initialState = {
    jobs: [],
    filteredJobs: [],
    currentJob: null
};

export default (state = initialState,action) => {
    const { type,payload } = action;
    switch(type){
        case GET_JOBS:
            return {
                ...state,
                jobs: payload,
                filteredJobs: payload
            };
        case FILTER_JOBS:
            return {
                ...state,
                filteredJobs: [ ...payload]
            };
        case ADD_JOB:
            return {
                ...state,
                jobs: [ ...state.jobs, payload.job],
                filteredJobs: [ ...state.jobs, payload.job]
            };
        case GET_JOB:
            return {
                ...state,
                currentJob: payload
            };
        case EDIT_JOB:
            return {
                ...state,
                currentJob: payload,
                jobs: state.jobs.map(job => {
                    if(job._id === payload._id){
                        return payload;
                    } 
                    return job;
                }),
                filteredJobs: state.jobs.map(job => {
                    if(job._id === payload._id){
                        return payload;
                    } 
                    return job;
                })
            };
        default:
            return state;
    }
}