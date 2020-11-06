import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import Controls from "./components/Controls";

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
    </Container>
  );
}

export default App;
