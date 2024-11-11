import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: end;
  margin-left: 16px;
  gap: 8px;
  margin-right: 16px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ bg }) => bg && bg};
  border-radius: 20px;
  padding: 4px 16px;
  font-size: 12px;
  color: white;
  font-weight: 600;
`;

export const ValueContainer = styled.div`
  display: flex;
  border-radius: 20px;
  border: 2px solid ${({ bg }) => bg && bg};
`;

export const VerticalLine = styled.div`
  width: 1px;
  background: #f7f2eb;
`;

export const OutputValue = styled.div`
  align-self: center;
  margin: 0 16px 0 32px;
`;
