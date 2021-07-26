import React from "react";
import styled from "styled-components";

const StyledTitle = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.dark};
  padding-bottom: 0;
  > h1 {
    letter-spacing: 0.75px;
    font-size: 3rem;
    margin-top: 1rem;
    font-weight: bolder;
  }
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
