export default function dragStartController(event, setDragging) {
  if (event.source.droppableId !== "spare-numbers") {
    setDragging(event.source.index - 1000);
  }
}
