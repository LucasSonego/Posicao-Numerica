import React, { useEffect, useState } from "react";

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

  return <div className="App"></div>;
}

export default App;
