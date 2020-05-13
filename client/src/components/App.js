import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';

import Alert from './subcomponents/Alert';
import Navbar from './subcomponents/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import JobForm from './pages/JobForm';
import LoginComponent from './pages/LoginComponent';
import PrivateRoute from './PrivateRoute';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Alert />
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={LoginComponent} />
                <Route path="/login" exact component={LoginComponent} />
                <PrivateRoute path="/dashboard" exact component={Dashboard} />
                <PrivateRoute path="/add-job" exact component={JobForm} />
                <PrivateRoute path="/edit-job/:jobId" exact component={JobForm} />
            </div>
        </BrowserRouter>
    )
}

export default App;