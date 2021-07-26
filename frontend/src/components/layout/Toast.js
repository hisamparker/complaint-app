import styled, {css} from "styled-components";

const Modal = styled.section`
  border: 2px solid rgba(136, 14, 79, 0.1);
  border-radius: 4px;
  position: fixed;
  width: 460px;
  transform: translate(-50%, -100%);
  text-align: center;
  padding: 2rem 1rem;
  transition-delay: 0.5s;
  transition: all 0.3s ease-out;
  left: 50%;
  top: 0;
  color: white;
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  ${({ classNameP, theme }) =>
    classNameP === "success" &&
    css`
      background-color: ${({ theme }) => theme.success};
      color: ${({ theme }) => theme.onSuccess};
      top: 25px;
      transform: translate(-50%, 0);
      transition: all 0.45s ease-in;
    `}
  ${({ classNameP, theme }) =>
    classNameP === "error" &&
    css`
      background-color: ${({ theme }) => theme.error};
      color: ${({ theme }) => theme.onError};
      top: 25px;
      transform: translate(-50%, 0);
      transition: all 0.45s ease-in;
    `}
  ${({ classNameP, theme }) =>
    classNameP === "hidden" &&
    css`
      background-color: ${({ theme }) => theme.disabled.backgroundColor};
      color: black;
      transform: translate(-50%, -100%);
      top: 0;
    `};
`;

const CloseBtn = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 25px;
    width: 25px;
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 0;
    &::after,
    &::before {
        content: "";
        height: 100%;
        width: 2px;
        background-color: white;
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
    }
    &::after {
        transform: rotate(45deg);
    }
    &::before {
        transform: rotate(-45deg);
    }
`;

const Toast = ({ classNameP, dismissOnClick, children }) => {
  return (
    <Modal classNameP={classNameP}>
      {dismissOnClick && <CloseBtn name="button" onClick={dismissOnClick}>close</CloseBtn>}
      {children}
    </Modal>
  );
};

export default Toast;
