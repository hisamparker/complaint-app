import React from 'react';
import styled, {css} from 'styled-components';

const StyledButton = styled.button`
  padding: 1em 2em;
  font-weight: 700;
  position: relative;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  transition: all ease-out 200ms;
  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
  &:disabled {
    background-color: ${({ theme }) => theme.disabled.disabled};
    cursor: ${({ theme }) => theme.disabled.cursor};
    color: ${({ theme }) => theme.disabled.onDisabled};
    border: ${({ theme }) => theme.disabled.border};
  }
  ${({ styleP, theme }) =>
    styleP === "primary" &&
    css`
      background-color: ${theme.primary};
      color: ${theme.onPrimary};
    `};
  ${({ styleP, theme }) =>
    styleP === "secondary" &&
    css`
      background-color: transparent;
      color: ${theme.secondary};
      border: 2px solid ${theme.secondary};
    `};
  ${({ styleP, theme }) =>
    styleP === "naked" &&
    css`
      background-color: transparent;
      padding: 0;
      color: ${theme.primary};
    `};
  ~ button {
    margin-left: 1rem;
  }
`;

const Button = ({children, onClickP, type, styleP}) => {
    return (
      <StyledButton styleP={styleP} type={type} onClick={onClickP}>
        {children}
      </StyledButton>
    );
};

export default Button;