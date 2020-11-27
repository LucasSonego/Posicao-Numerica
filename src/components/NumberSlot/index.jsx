import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Number from "../Number";

import { Container } from "./styles";

function NumberSlot({ index, number, dragging }) {
  return (
    <Droppable
      droppableId={`${index}`}
      index={index}
      isCombineEnabled={true}
      direction="horizontal"
      isDropDisabled={
        (number !== null && (!dragging || (dragging && dragging !== index))) ||
        false
      }
    >
      {provided => (
        <Container
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={number !== null && index !== number ? "wrong-number" : ""}
        >
          {number !== null ? (
            <Number index={index + 1000} number={number + 1} key={index} />
          ) : (
            <div className="correct-number">{index + 1}</div>
          )}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
}

export default NumberSlot;
