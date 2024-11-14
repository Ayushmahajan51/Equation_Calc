import styled from "styled-components";

export const Input = styled.input`
  text-align: center;
  border: none;
  margin: 8px;
  outline: none;
  border-radius: 20px;
  width: 60px;
  /* Disable spinner buttons in WebKit browsers (Chrome, Safari, Edge, Opera) */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
