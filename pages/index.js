import Chain from "@/components/Chain";
import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export default function Home() {
  return (
    <AppContainer>
      <Chain />
    </AppContainer>
  );
}
