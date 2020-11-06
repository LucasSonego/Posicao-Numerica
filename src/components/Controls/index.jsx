import React, { useState } from "react";
import { BsFillGearFill } from "react-icons/bs";

import { Container, ControlsContainer, Backdrop } from "./styles";

function Controls({ changeSlotAmount }) {
  const [expanded, setExpanded] = useState(false);
  const [size, setSize] = useState(5);

  return (
    <Container>
      <button
        className="toggle-controls"
        onClick={() => (expanded ? setExpanded(false) : setExpanded(true))}
      >
        <BsFillGearFill />
      </button>
      <ControlsContainer expanded={expanded}>
        <div className="size-controller">
          <p>Quantidade de números</p>
          <div className="range">
            <input
              type="range"
              min="1"
              max="10"
              defaultValue="5"
              onChange={event => setSize(event.target.value)}
            />
            <span>{size * 10}</span>
          </div>
          <button onClick={() => changeSlotAmount(size * 10)}>
            Alterar tamanho
          </button>
        </div>
      </ControlsContainer>
      {expanded && (
        <Backdrop expanded={expanded} onClick={() => setExpanded(false)} />
      )}
    </Container>
  );
}

export default Controls;
