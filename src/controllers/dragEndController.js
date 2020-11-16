export default function dragEndController(
  event,
  { slots, setSlots, spareNumbers, setSpareNumbers }
) {
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
