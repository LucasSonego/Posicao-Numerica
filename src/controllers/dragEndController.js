export default function dragEndController(
  event,
  {
    slots,
    setSlots,
    spareNumbers,
    setSpareNumbers,
    generateRandomNumber,
    validateSlots,
    onAllSlotsCorrect,
  }
) {
  function validate(slotsState) {
    let mistakes = 0;
    slotsState.map((number, index) => {
      if (number !== index) {
        mistakes++;
      }
      return true;
    });
    if (mistakes === 0) {
      onAllSlotsCorrect();
    }
  }

  if (event.source.droppableId === "spare-numbers") {
    if (
      event.destination?.droppableId &&
      slots[event.destination?.droppableId] === null
    ) {
      let updatedSpareNumbers = [...spareNumbers];
      let updatedSlots = [...slots];

      updatedSlots[event.destination.droppableId] = updatedSpareNumbers.splice(
        event.source.index,
        1
      )[0];

      setSpareNumbers(updatedSpareNumbers);
      setSlots(updatedSlots);

      validateSlots && validate(updatedSlots);

      if (updatedSpareNumbers.length === 0) {
        generateRandomNumber();
      }
    }
  } else {
    if (
      (event.destination?.droppableId &&
        slots[event.destination?.droppableId] === null) ||
      event.destination?.droppableId === event.source?.droppableId
    ) {
      if (event.destination.droppableId !== event.source.droppableId) {
        let updatedSlots = [...slots];
        updatedSlots[event.destination.droppableId] =
          slots[event.source.droppableId];

        updatedSlots[event.source.droppableId] = null;

        setSlots(updatedSlots);
      }
    } else {
      let updatedSpareNumbers = [...spareNumbers];
      updatedSpareNumbers.push(slots[event.source.droppableId]);

      let updatedSlots = [...slots];
      updatedSlots[event.source.droppableId] = null;

      setSpareNumbers(updatedSpareNumbers);
      setSlots(updatedSlots);
    }
  }
}
