import React from 'react'
import styled, {css} from 'styled-components';

const StyledCard = styled.article`
  margin-top: 1.75rem;
  margin-right: 1.5rem;
  background-color: ${({ theme }) => theme.surface};
  width: 200px;
  height: 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  text-align: left;
  position: relative;
  font-size: 1.2rem;
  font-weight: lighter;
  letter-spacing: .06em;
  &::before {
    background-color: ${({ theme }) => theme.midground};
    content: "";
    /* Position */
    top: 0;
    left: 0;
    position: absolute;
    transform: translate(-0.5rem, -0.5rem);

    /* Size */
    height: 100%;
    width: 100%;

    /* Display under the main content */
    z-index: -1;
  }
`;

const StyledDocker = styled.div`
  border-radius: 50%;
  height: 32px;
  position: absolute;
  right: 0px;
  top: 0px;
  transform: translate(50%, -50%);
  width: 32px;
  font-size: 1.25rem;
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;
  ${({ priority, theme }) =>
    priority.toString() === "1" &&
    css`
      background-color: ${theme.secondary};
      color: ${theme.onSecondary};
    `};
  ${({ priority, theme }) =>
    priority.toString() === "2" &&
    css`
      background-color: ${theme.primary};
      color: ${theme.onPrimary};
    `};
  ${({ priority, theme }) =>
    priority.toString() === "3" &&
    css`
      background-color: ${theme.primaryVariant};
      color: ${theme.onPrimary};
    `};
`;


const Card = ({ children, priority }) => {
    return (
      <StyledCard>
        <StyledDocker priority={priority}>{priority}</StyledDocker>
        <span>
          <b>Ticket : </b>
        </span>{" "}
        <div>{children}</div>
      </StyledCard>
    );
}
 
export default Card;