import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    display: none;
    &:checked ~ div {
       background-color: ${({theme}) => theme.surface};

        &::before {
            transform: scale(0);
        }

        &::after {
            transform: translate3d(20px,0,0); 
        }
    }
`;

const StyledDiv = styled.div`
  display: block;
  position: relative;
  flex: none;
  width: 50px;
  height: 30px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.background};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  z-index: 1;
  margin: 10px;

  &::before,
  &::after {
    content: " ";
    display: block;
    position: absolute;
    top: 1px;
    border-radius: 30px;
    height: 28px;
    background-color: ${({ theme }) => theme.midground};
    transform: translate3d(0, 0, 0);
    transition: 0.2s cubic-bezier(0, 1.1, 1, 1.1);
  }
  &::before {
    z-index: -1;
    width: 48px;
    right: 1px;
    transform: scale(1);
    background-color: ${({ theme }) => theme.midground};
  }

  &::after {
    z-index: 1;
    width: 28px;
    left: 1px;
    box-shadow: 0 1px 4px 0.5px rgba(0, 0, 0, 0.25);
  }
`;

const CheckInput = ({
  type = "checkbox",
  name,
  onChange,
  checked = null,
  theme,
  children,
}) => {
    if(theme === "dark") {
        checked = 'checked';
    }
  return (
    <section>
      {children}
      <label htmlFor={name}>
        <StyledInput type={type} name={name} onChange={onChange} id={name} checked={checked}/>
        <StyledDiv></StyledDiv>
      </label>
    </section>
  );
};
 
export default CheckInput;
