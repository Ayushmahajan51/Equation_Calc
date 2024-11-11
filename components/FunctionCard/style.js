import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

export const Title = styled.h3`
  margin-top: 0;
  font-size: 1rem;
  color: #ccc;
`;

export const EquationInput = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

export const NextFunctionSelect = styled.select`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: none;
`;

export const InpWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 4px;
`;

export const InpOutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const EquationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 16px 0;
  gap: 8px;
`;

export const EquationLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
`;
