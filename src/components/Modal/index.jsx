import React from "react";

import { Container } from "./styles";

function Modal({ children, visible, hide }) {
  return (
    <Container visible={visible}>
      <div className="content">{children}</div>
      {visible && <div className="backdrop" onClick={() => hide()} />}
    </Container>
  );
}

export default Modal;
