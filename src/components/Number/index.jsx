import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { Container } from "./styles";

function Number({ index, number }) {
  return (
    <Draggable draggableId={`${index}`} index={index}>
      {provided => (
        <Container
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <span>{number}</span>
        </Container>
      )}
    </Draggable>
  );
}

export default Number;
