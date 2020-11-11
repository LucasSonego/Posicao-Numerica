import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Number from "../Number";

import { Container } from "./styles";

function NewNumbersContainer({ numbers }) {
  return (
    <Droppable droppableId="spare-numbers" isDropDisabled={true}>
      {provided => (
        <Container ref={provided.innerRef} {...provided.droppableProps}>
          <div className="numbers">
            {numbers.map((number, index) => (
              <Number index={index} number={number} key={index} />
            ))}
          </div>
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
}

export default NewNumbersContainer;
