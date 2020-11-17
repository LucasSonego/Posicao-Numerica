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
  const [spareNumbers, setSpareNumbers] = useState([]);
  const [unlistedNumbers, setUnlistedNumbers] = useState([]);
  const [showCorrectNumbers, setShowCorrectNumbers] = useState(false);
  const [showMistakes, setShowMistakes] = useState(false);
  const [dragging, setDragging] = useState(null);

  useEffect(() => {
    let defaultSlots = [];
    let defaultUnlistedNumbers = [];
    for (let index = 0; index < DEFAULT_SLOT_AMOUNT; index++) {
      defaultSlots.push(null);
      defaultUnlistedNumbers.push(index);
    }
    setSlots(defaultSlots);
    let randomNumber = defaultUnlistedNumbers.splice(
      parseInt(Math.random() * defaultUnlistedNumbers.length),
      1
    )[0];
    setUnlistedNumbers(defaultUnlistedNumbers);
    setSpareNumbers([randomNumber]);
  }, []);

  function generateRandomNumber() {
    if (unlistedNumbers.length > 0) {
      let updatedUnlistedNumbers = [...unlistedNumbers];
      let randomNumber = updatedUnlistedNumbers.splice(
        parseInt(Math.random() * updatedUnlistedNumbers.length),
        1
      )[0];
      setUnlistedNumbers([...updatedUnlistedNumbers]);
      setSpareNumbers([randomNumber]);
    }
  }

  function changeSlotAmount(amount) {
    let updatedSlots = [];
    let updatedUnlistedNumbers = [];
    for (let index = 0; index < amount; index++) {
      updatedSlots.push(null);
      updatedUnlistedNumbers.push(index);
    }
    let randomNumber = updatedUnlistedNumbers.splice(
      parseInt(Math.random() * updatedUnlistedNumbers.length),
      1
    )[0];
    setSlots(updatedSlots);
    setUnlistedNumbers([...updatedUnlistedNumbers]);
    setSpareNumbers([randomNumber]);
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
              generateRandomNumber: generateRandomNumber,
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
