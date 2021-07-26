import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  margin-top: 1rem;
  width: 100%;
  height: 100px;
  &:disabled {
    background-color: ${({ theme }) => theme.disabled.disabled};
    cursor: ${({ theme }) => theme.disabled.cursor};
    color: ${({ theme }) => theme.disabled.onDisabled};
    border: ${({ theme }) => theme.disabled.border};
  }
`;
const TextInput = ({name, id }) => {
    return ( 
        <StyledTextArea name={name} id={id}></StyledTextArea>
     );
}
 
export default TextInput;