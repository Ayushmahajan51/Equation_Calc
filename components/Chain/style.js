import styled from "styled-components";

export const ChainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  position: relative;
  height: 100vh;
  justify-content: center;
`;

export const AboveRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 128px;
`;

export const SvgContainer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.6;
`;

export const Path = styled.path`
  stroke: #B0CDFB;
  stroke-width: 8;
  fill: none;
  stroke-linecap: round;
`;
