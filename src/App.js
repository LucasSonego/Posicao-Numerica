import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { Container } from "./styles";
import Controls from "./components/Controls";
import SpareNumbersContainer from "./components/SpareNumbersContainer";
import NumberSlotsContainer from "./components/NumberSlotsContainer";
import dragEndController from "./controllers/dragEndController";
import dragStartController from "./controllers/dragStartController";

function App() {
  const DEFAULT_SLOT_AMOUNT = 50;

  const [slots, setSlots] = useState([]);
  const [spareNumbers, setSpareNumbers] = useState([1, 2, 3, 4, 5]);
  const [showCorrectNumbers, setShowCorrectNumbers] = useState(false);
  const [showMistakes, setShowMistakes] = useState(false);
  const [dragging, setDragging] = useState(null);

  useEffect(() => {
    let defaultSlots = [];
    for (let index = 0; index < DEFAULT_SLOT_AMOUNT; index++) {
      defaultSlots.push(null);
    }
    setSlots(defaultSlots);
  }, []);

  function changeSlotAmount(amount) {
    let updatedSlots = [];
    for (let index = 0; index < amount; index++) {
      updatedSlots.push(null);
    }
    setSlots(updatedSlots);
  }

  return (
    <Container>
      <Controls
        changeSlotAmount={changeSlotAmount}
        showCorrectNumbers={showCorrectNumbers}
        setShowCorrectNumbers={setShowCorrectNumbers}
        showMistakes={showMistakes}
        setShowMistakes={setShowMistakes}
      />
      <div className="application">
        <DragDropContext
          onDragStart={event =>
            dragStartController(event, {
              slots,
              setDragging: setDragging,
            })
          }
          onDragEnd={event => {
            setDragging(null);
            dragEndController(event, {
              slots: slots,
              setSlots: setSlots,
              spareNumbers: spareNumbers,
              setSpareNumbers: setSpareNumbers,
            });
          }}
        >
          <NumberSlotsContainer
            slots={slots}
            showCorrectNumbers={showCorrectNumbers}
            showMistakes={showMistakes}
            dragging={dragging}
            className="slots"
          />
          <SpareNumbersContainer numbers={spareNumbers} className="spare" />
        </DragDropContext>
      </div>
    </Container>
  );
}

export default App;
