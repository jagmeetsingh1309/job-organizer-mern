import React from 'react';
import { Link,Redirect } from 'react-router-dom';
import { reduxForm,Field } from 'redux-form';
import { connect } from 'react-redux';

import { loginUser,signupUser } from '../../Actions/authActions';
import RenderInput from '../subcomponents/RenderInput';
import { Button } from '../elements/Button';
import { GridWrapper,GridCol } from '../elements/Grid';


class LoginComponent extends React.Component {

    state = {
        loginMode: true 
    }

    onSubmitHandler = (formValues) => {
        if(this.state.loginMode){
            this.props.loginUser(formValues, this.props.history);
        } else {
            this.props.signupUser(formValues, this.props.history);
        }
    }
    
    componentDidMount(){
        if(this.props.match.path === '/signup'){
            this.setState({ loginMode: false });
        }
    }

    render(){
        let helperText,buttonText;

        if(this.props.isLoggedIn){
            return <Redirect to="/dashboard" />
        }

        if(this.state.loginMode){
            buttonText = 'Login';
            helperText = 'New to applyist? ';
        } else {
            buttonText = 'Signup';
            helperText = 'Already a member ';
        }
        
        return (
            <GridWrapper>
                <GridCol start="3" end="8"> 
                    <form onSubmit={ this.props.handleSubmit(this.onSubmitHandler)}>
                        <Field type="text" placeholder="Enter Email" 
                            name="email" label="Email" component={RenderInput} 
                        />
                        <Field type="password" placeholder="Enter password" 
                            name="password" label="Password" component={RenderInput} 
                        />
                        <Button type="submit">{ buttonText }</Button>
                    </form>
                    <div><p>{ helperText }<Link to="/signup">{ buttonText }</Link></p></div>
                </GridCol>
            </GridWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

const validate = formValues => {
    let errors = {};
    if(!formValues.email){
        errors.email = 'Email cannot be empty';
    }
    if(!formValues.password){
        errors.password = 'Password cannot be empty';
    }else if(formValues.password.length < 8){
        errors.password = 'Password must be 8 characters long';
    }
    return errors;
}

export default reduxForm({
    form: 'loginForm',
    validate: validate
})(
    connect(mapStateToProps,{
        loginUser: loginUser,
        signupUser: signupUser
    })(LoginComponent)
);