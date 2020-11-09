import React from "react";
import NumberSlot from "../NumberSlot";

import { Container } from "./styles";

function NumberSlotsContainer({ slots, showNumbers, dragging }) {
  console.log(dragging);

  return (
    <Container showNumbers={showNumbers}>
      {slots.map((number, index) => (
        <NumberSlot
          index={index}
          number={number}
          key={index}
          dragging={`${index}` === dragging}
        />
      ))}
    </Container>
  );
}

export default NumberSlotsContainer;
