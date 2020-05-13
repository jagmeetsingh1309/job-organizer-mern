import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm,Field } from 'redux-form';

import RenderInput from '../subcomponents/RenderInput';
import RenderSelectInput from '../subcomponents/RenderSelectInput';
import { addJob,editJob } from '../../Actions/jobActions';
import { Button } from '../elements/Button';
import { GridWrapper,GridCol } from '../elements/Grid';

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;

class JobForm extends React.Component {

    state = {
        isEditing: false
    }

    componentDidMount(){
        if(this.props.match.path === '/edit-job/:jobId'){
            this.setState({ isEditing: true });
        }
    }

    onSubmit = (formValues) => {
        const job = { ...formValues, createdBy: this.props.userId};
        if(!this.state.isEditing){
            this.props.addJob(job);
            this.props.history.push('/dashboard');
        } else {
            this.props.editJob(job);
            this.props.history.push('/dashboard');
        }
    }

    render(){
        const title = this.state.isEditing ? 'Edit Job' : 'Add A Job';
        const buttonText = this.state.isEditing ? 'Modify' : 'Submit';
        return (
            <Wrapper>
                <h3>{title}</h3>
                <Link to="/dashboard"><i className="fas fa-arrow-circle-left"></i> Back to dashboard</Link>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} style={{ marginTop: '1rem'}}>
                    <GridWrapper>
                        <GridCol start="1" end="6">
                            <Field type="text" name="title" 
                                placeholder="Senior Dog Walker" 
                                label="Position Title" component={RenderInput}
                            />
                            <Field type="text" name="address" 
                                placeholder="Hyderabad,India" 
                                label="Location" component={RenderInput}
                            />
                            <Field type="text" name="company" 
                                placeholder="Google" label="Company"
                                component={RenderInput} 
                            />
                        </GridCol>
                        <GridCol start="7" end="13">
                            <Field type="date" name="appliedOn" 
                                label="Date Applied" component={RenderInput}
                            />
                            <Field name="status" label="Current Status" 
                                component={RenderSelectInput}
                            />
                        </GridCol>
                    </GridWrapper> 
                    <Button type="submit">{buttonText}</Button>       
                </form>
            </Wrapper>
        );
    }
};

const mapStateToProps = (state,props) => {
    if(props.match.path === '/edit-job/:jobId'){
        return {
            userId: state.auth.userId,
            initialValues: state.jobs.currentJob
        };
    } else {
        return {
            userId: state.auth.userId
        }
    }
}

export default connect(mapStateToProps,{
    addJob: addJob,
    editJob: editJob
})(
    reduxForm({
        form: 'jobForm'
    })(JobForm)
);