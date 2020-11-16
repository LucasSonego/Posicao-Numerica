import React from "react";
import NumberSlot from "../NumberSlot";

import { Container } from "./styles";

function NumberSlotsContainer({
  slots,
  showCorrectNumbers,
  dragging,
  showMistakes,
}) {
  return (
    <Container
      showCorrectNumbers={showCorrectNumbers}
      showMistakes={showMistakes}
    >
      {slots.map((number, index) => (
        <NumberSlot
          index={index}
          number={number}
          key={index}
          dragging={dragging}
        />
      ))}
    </Container>
  );
}

export default NumberSlotsContainer;
