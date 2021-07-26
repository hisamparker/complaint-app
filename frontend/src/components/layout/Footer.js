import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.primaryVariant};
  height: 100%;
  padding: 0.15rem 0 3rem;
  color: white;
`;

const Footer = ({className, children}) => {
    return (
      <StyledFooter className={className}>
            {children}
      </StyledFooter>
    );
}
 
export default Footer;