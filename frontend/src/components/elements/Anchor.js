import React from "react";
import styled, { css } from "styled-components";

const StyledLink = styled.div`
  padding: 1em 2em;
  font-weight: 700;
  position: relative;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  transition: all ease-out 500ms;
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
      > a {
        color: ${theme.onPrimary};
      }
    `};
  ${({ styleP, theme }) =>
    styleP === "secondary" &&
    css`
      background-color: ${theme.secondary};
      border: ${theme.onSecondary};
      > a {
        color: ${theme.onSecondary};
      }
    `};
  ${({ styleP, theme }) =>
    styleP === "naked" &&
    css`
      background-color: transparent;
      padding: 0;
      color: ${theme.onBackground};
    `};
  ~ div {
    margin-left: 1rem;
  }
  > a {
    font-size: 1.25rem;
  }
`;

const Anchor = ({ children, onClickP, type, styleP }) => {
  return (
    <StyledLink styleP={styleP}>
      {children}
    </StyledLink>
  );
};

export default Anchor;
