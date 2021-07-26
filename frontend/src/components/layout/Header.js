import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.dark};
  padding-bottom: 1.5rem;
  > section h1 {
    letter-spacing: 0.75px;
    font-size: 3rem;
    margin-top: 0.5rem;
  }
`;

const Header = ({ children }) => {
  return (
      <StyledHeader>
        {children}
      </StyledHeader>
  );
};
 
export default Header;