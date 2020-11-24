import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { MdRefresh } from "react-icons/md";
import { BsFillGearFill } from "react-icons/bs";

import { Container } from "./styles";
import Controls from "./components/Controls";
import SpareNumbersContainer from "./components/SpareNumbersContainer";
import NumberSlotsContainer from "./components/NumberSlotsContainer";
import Modal from "./components/Modal";
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
  const [allSlotsCorrect, setAllSlotsCorrect] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

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

  function clearGrid(size) {
    let updatedSlots = [];
    let updatedUnlistedNumbers = [];
    for (let index = 0; index < size; index++) {
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
    setStartTime(null);
    setEndTime(null);
  }

  function formatTime(time) {
    let fixedTime = Number(time).toFixed();
    let minutes = Math.floor(fixedTime / 60);
    if (minutes > 0) {
      fixedTime = fixedTime - minutes * 60;
    }
    return `${minutes}:${fixedTime}`;
  }

  return (
    <Container largeScreen={window.screen.availWidth > 1400}>
      <Controls
        changeSlotAmount={clearGrid}
        showCorrectNumbers={showCorrectNumbers}
        setShowCorrectNumbers={setShowCorrectNumbers}
        showMistakes={showMistakes}
        setShowMistakes={setShowMistakes}
        expanded={showOptions}
        setExpanded={setShowOptions}
      />
      <Modal visible={allSlotsCorrect} hide={() => setAllSlotsCorrect(false)}>
        <div className="modal-content">
          <h3>Atividade completa!</h3>
          <h4>Tempo: {formatTime((endTime - startTime) / 1000)}</h4>
          <div className="buttons">
            <button
              className="restart"
              onClick={() => {
                clearGrid(slots.length);
                setAllSlotsCorrect(false);
              }}
            >
              <MdRefresh />
              <span>Reiniciar</span>
            </button>
            <button
              className="options"
              onClick={() => {
                setShowOptions(true);
                setAllSlotsCorrect(false);
              }}
            >
              <BsFillGearFill />
              <span>Opções</span>
            </button>
          </div>
        </div>
      </Modal>
      <div className="application">
        <DragDropContext
          onDragStart={event => {
            dragStartController(event, {
              slots,
              setDragging: setDragging,
            });
            !startTime && setStartTime(Date.now());
          }}
          onDragEnd={event => {
            setDragging(null);
            dragEndController(event, {
              slots: slots,
              setSlots: setSlots,
              spareNumbers: spareNumbers,
              setSpareNumbers: setSpareNumbers,
              generateRandomNumber: generateRandomNumber,
              validateSlots: unlistedNumbers.length === 0,
              onAllSlotsCorrect: () => {
                setAllSlotsCorrect(true);
                setEndTime(Date.now());
              },
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
