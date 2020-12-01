import React from "react";

import { Container } from "./styles";

function Toggle({ value, setValue }) {
  return (
    <Container
      value={value}
      onClick={() => (value ? setValue(false) : setValue(true))}
    >
      <div className="ball"></div>
    </Container>
  );
}

export default Toggle;
