import React from 'react';
import { Select } from '../elements/Form';

const RenderSelectInput = (formProps) => {
    return (
        <div>
            <label htmlFor={formProps.input.name}>{formProps.label}</label>
            <Select {...formProps.input} >
                <option>select Option</option>
                <option value="Applied">Applied</option>
                <option value="Under Review">Under Review</option>
                <option value="Offer Received">Offer Received</option>
                <option value="Rejected">Rejected</option>
            </Select>
        </div>
    );
};

export default RenderSelectInput;