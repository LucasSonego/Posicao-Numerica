import React from "react";

import { Container } from "./styles";

function Range({ min, max, defaultValue, onChange }) {
  return (
    <Container
      type="range"
      min={min}
      max={max}
      defaultValue={defaultValue}
      onChange={event => onChange(event)}
    />
  );
}

export default Range;
