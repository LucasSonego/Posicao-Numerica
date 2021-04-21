import React, { useState } from "react";

import { Container } from "./styles";
require("dotenv").config();

function ModalForm({ time, size, resultSent, setResultSent }) {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  function submit(event) {
    event.preventDefault();
    if (!name || !email) return;

    var data = JSON.stringify({
      nome: name,
      email: email,
      tempo: time,
      tamanho: size,
    });
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (this.status.toString().startsWith(2)) {
          setResultSent(true);
        }
        console.log(this.status);
        console.log(this.statusText);
      }
    });
    xhr.open("POST", `${process.env.REACT_APP_API_URL}`);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(data);
  }

  return (
    <Container onSubmit={event => submit(event)}>
      <div className="labeled-input-field">
        <span>Nome</span>
        <input
          type="text"
          onChange={event => setName(event.target.value)}
          disabled={resultSent}
        />
      </div>
      <div className="labeled-input-field">
        <span>Email</span>
        <input
          type="email"
          name=""
          id=""
          onChange={event => setEmail(event.target.value)}
          disabled={resultSent}
        />
      </div>
      <button type="submit" disabled={resultSent}>
        {resultSent ? "Resultado enviado ✔️" : "Enviar Resultado"}
      </button>
    </Container>
  );
}

export default ModalForm;
