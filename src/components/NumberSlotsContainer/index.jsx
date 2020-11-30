import React from "react";
import NumberSlot from "../NumberSlot";

import { Container } from "./styles";

function NumberSlotsContainer({
  slots,
  showCorrectNumbers,
  dragging,
  showMistakes,
  smallLayout,
}) {
  return (
    <Container
      showCorrectNumbers={showCorrectNumbers}
      showMistakes={showMistakes}
      smallLayout={smallLayout}
    >
      {slots.map((number, index) => (
        <NumberSlot
          index={index}
          number={number}
          key={index}
          dragging={dragging}
          smallLayout={smallLayout}
        />
      ))}
    </Container>
  );
}

export default NumberSlotsContainer;
