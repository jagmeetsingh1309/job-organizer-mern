import React from 'react';
import styled from 'styled-components';
import { Input } from '../elements/Form';

const Text = styled.span`
    color: red;
`;

const RenderInput = (formProps) => {
    return (
        <div>
            <label htmlFor={formProps.input.name}>{formProps.label}</label>
            <Input 
                {...formProps.input} 
                type={formProps.type} 
                placeholder={formProps.placeholder} 
                borderColor={formProps.meta.touched && formProps.meta.error ? 'red' : '#d4d2d2'}
            />
            {formProps.meta.touched && <Text>{formProps.meta.error}</Text>}
        </div>
    )
};

export default RenderInput;