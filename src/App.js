import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { Container } from "./styles";
import Controls from "./components/Controls";
import NumberSlot from "./components/NumberSlot";

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
          <NumberSlot index={1} number={null} key={1} />
          <NumberSlot index={2} number={null} key={2} />
          <NumberSlot index={3} number={3} key={3} />
          <NumberSlot index={4} number={null} key={4} />
        </DragDropContext>
      </div>
    </Container>
  );
}

export default App;
