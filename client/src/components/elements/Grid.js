import styled, { css } from 'styled-components';

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12,1fr);
    ${props => props.gap ? css`
        grid-gap: ${props.gap}
    `: ''};
`;

export const GridCol = styled.div`
    grid-column: ${props => props.start } / ${props => props.end};
`;