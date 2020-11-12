import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { Container } from "./styles";
import Controls from "./components/Controls";
import SpareNumbersContainer from "./components/SpareNumbersContainer";
import NumberSlotsContainer from "./components/NumberSlotsContainer";
import dragEndController from "./controllers/dragEndController";

function App() {
  const DEFAULT_SLOT_AMOUNT = 50;

  const [slots, setSlots] = useState([]);
  const [spareNumbers, setSpareNumbers] = useState([1, 2, 3, 4, 5]);
  const [showNumbers, setShowNumbers] = useState(false);

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
      <Controls changeSlotAmount={changeSlotAmount} />
      <div className="application">
        <DragDropContext
          onDragEnd={event => console.log(event)}
          onDragEnd={event => {
            setDraggingNumber("");
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
            showNumbers={showNumbers}
            className="slots"
          />
          <SpareNumbersContainer numbers={spareNumbers} className="spare" />
        </DragDropContext>
      </div>
    </Container>
  );
}

export default App;
