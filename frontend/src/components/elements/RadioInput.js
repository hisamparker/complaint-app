import React from 'react';
import styled from 'styled-components';

const StyledRadioGroup = styled.section`
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.16);
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;
const StyledRadioLabel = styled.label`
  position: relative;
  padding: 1rem;
  background-color: ${({ theme }) => theme.highlight};
  cursor: pointer;
  padding: 10px 15px;
  text-align: center;
  display: block;
  font-size: 1rem;
  font-weight: 500;
`;

const StyledRadioInput = styled.input`
  display: none;
  &:checked ~ label {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.onSecondary};
  }
  &:disabled ~ label,
  &:checked:disabled ~ label {
    background-color: ${({ theme }) => theme.disabled.disabled};
    cursor: ${({ theme }) => theme.disabled.cursor};
    color: ${({ theme }) => theme.disabled.onDisabled};
    border: ${({ theme }) => theme.disabled.border};
  }
`;

const RadioInput = ({
  typeP,
  nameP,
  onChangeP,
  priority
}) => {
  return (
    <StyledRadioGroup>
      {priority.length > 0 &&
        priority.map((radioItem, i) => (
          <div className="radio-item" key={`${radioItem}-${i}`}>
            <StyledRadioInput
              type={typeP}
              name={nameP}
              value={radioItem}
              id={`radio-item-${radioItem}`}
              onChange={onChangeP}
            />
            <StyledRadioLabel
              className="form-check-radio"
              htmlFor={`radio-item-${radioItem}`}
            >
              {radioItem === 1 ? `high` : radioItem === 2 ? `medium` : `low` }
            </StyledRadioLabel>
          </div>
        ))}
    </StyledRadioGroup>
  );
};
 
export default RadioInput;