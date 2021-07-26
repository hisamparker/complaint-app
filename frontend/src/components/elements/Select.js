import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  border: ${({ theme }) => theme.border};
  border-radius: 4px;
  padding: 0.25rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  text-align: center;
  &:disabled {
    background-color: ${({ theme }) => theme.disabled.disabled};
    cursor: ${({ theme }) => theme.disabled.cursor};
    color: ${({ theme }) => theme.disabled.onDisabled};
    border: ${({ theme }) => theme.disabled.border};
  }
`;

const StyledOption = styled.option`
  padding: 1rem;
`;

const Select = ({ name, onChange, text, children}) => {
    return (
      
        <StyledSelect name={name} onChange={onChange}>
          <StyledOption value="">{text}</StyledOption>
          {children}
        </StyledSelect>
    );
}
 
export default Select;