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
      isDropDisabled={(number && dragging && dragging !== index) || false}
    >
      {provided => (
        <Container ref={provided.innerRef} {...provided.droppableProps}>
          {number ? (
            <div className={number === index ? "number" : "number wrong"}>
              <Number index={index + 1000} number={number} key={index} />
            </div>
          ) : (
            <div className="correct-number">{index}</div>
          )}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
}

export default NumberSlot;
