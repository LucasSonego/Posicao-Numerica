import React, { useState } from "react";
import { BsFillGearFill } from "react-icons/bs";
import { MdRefresh } from "react-icons/md";
import { RiMenuFoldLine } from "react-icons/ri";

import { Container, ControlsContainer, Backdrop } from "./styles";
import Range from "./Range";
import Toggle from "./Toggle";

function Controls({
  clearGrid,
  showCorrectNumbers,
  setShowCorrectNumbers,
  showMistakes,
  setShowMistakes,
  expanded,
  setExpanded,
  time,
}) {
  const [size, setSize] = useState(5);

  return (
    <Container>
      <button className="toggle-controls" onClick={() => setExpanded(true)}>
        <BsFillGearFill />
      </button>
      <ControlsContainer expanded={expanded}>
        <button className="close" onClick={() => setExpanded(false)}>
          <RiMenuFoldLine />
        </button>
        <div className="size-controller">
          <p>Quantidade de números</p>
          <div className="range">
            <Range
              min="1"
              max="10"
              defaultValue="5"
              onChange={event => setSize(event.target.value)}
            />
            <span>{size * 10}</span>
          </div>
          <button onClick={() => clearGrid(size * 10)}>Alterar tamanho</button>
        </div>
        <div className="toggle">
          <span>Exibir o número correto para cada posição</span>
          <Toggle value={showCorrectNumbers} setValue={setShowCorrectNumbers} />
        </div>
        <div className="toggle">
          <span>Destacar números posicionados incorretamente</span>
          <Toggle value={showMistakes} setValue={setShowMistakes} />
        </div>
        <div className="bottom">
          {time && <span className="time">Tempo: {time}</span>}
          <button onClick={() => clearGrid()}>
            <MdRefresh /> Reiniciar
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
