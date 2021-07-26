import React from 'react';
import styled from 'styled-components';

const StyledFieldSet = styled.fieldset`
  width: 100%;
  margin-top: 1rem;
  text-align: left;
  background-color: ${({ theme }) => theme.surface};
  padding: 1rem 2rem;
  > label:first-of-type {
    margin-top: 0.5rem;
  }
  > p {
    font-size: 1.25rem;
  }
`;

const FieldSet = ({children}) => {
    return ( 
        <StyledFieldSet className="form-legend">
            {children}
        </StyledFieldSet>
     );
}
 
export default FieldSet;