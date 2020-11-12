export default function dragStartController(event, { slots, setDragging }) {
  if (event.source.droppableId !== "spare-numbers") {
    setDragging(event.source.index - 1000);
  } else {
    setDragging(806584); //just random a number...
  }
}
