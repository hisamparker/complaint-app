import React from 'react'
import styled from 'styled-components';

const StyledComplaint = styled.article`
  margin-top: 1.25rem;
  width: 100%;
  text-align: left;
  background-color: ${({ theme }) => theme.surface};
  padding: 1rem 2rem;
  > p {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }
`;

const Complaint = ({ children }) => {
  return <StyledComplaint>{children}</StyledComplaint>;
};
 
export default Complaint;