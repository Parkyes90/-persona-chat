import React from "react";
import LoginPage from "./pages/login-page";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <LoginPage />
    </Container>
  );
}

export default App;
