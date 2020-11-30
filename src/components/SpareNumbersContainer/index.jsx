import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Number from "../Number";

import { Container } from "./styles";

function NewNumbersContainer({ numbers, smallLayout }) {
  return (
    <Droppable droppableId="spare-numbers" isDropDisabled={true}>
      {provided => (
        <Container
          smallLayout={smallLayout}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="numbers">
            {numbers.map((number, index) => (
              <Number
                index={index}
                number={number + 1}
                key={index}
                smallLayout={smallLayout}
              />
            ))}
          </div>
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
}

export default NewNumbersContainer;
