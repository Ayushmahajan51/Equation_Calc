import styled from "styled-components";
export const OutputWrapper = styled.div`
  display: flex;
  border-radius: 50%;
  border: 2px solid #E0E0DF;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  margin: ${({customStyle})=>customStyle && customStyle.margin};
`;
export const InputWrapper = styled.div`
  display: flex;
  border-radius: 50%;
  background: #4893FE;
  width: 8px;
  height: 8px;
`;
