import React from 'react';
import styled, {css} from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.5rem;
`; 

const StyledInput = styled.input`
  border: ${({ theme }) => theme.basicBorder};
  padding: 10px;
  font-size: 1rem;
  &:hover {
    border: solid 2px ${({ theme }) => theme.primaryShadow};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.disabled.backgroundColor};
    cursor: ${({ theme }) => theme.disabled.cursor};
    color: ${({ theme }) => theme.disabled.color};
    border: ${({ theme }) => theme.disabled.border};
  }
  ${(props) =>
    props.type === "textarea" &&
    css`
      height: 100px;
    `};
`;

// const StyledSpan = styled.span`
//   cursor: pointer;
//   font-size: 1rem;
//   color: black;
//   padding: 0.8rem 0;
//   font-weight: 300;
//   display: block;
// `;

const Input = ({ className, type, name, placeholder, onChange, required, disabled, index }) => {

  return (
    <StyledLabel className={className}>
      <StyledInput
        required={required && "required"}
        disabled={disabled && "disabled"}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        key={index ? index : name}
      />
    </StyledLabel>
  );
};
 
export default Input;