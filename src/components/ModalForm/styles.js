import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  .labeled-input-field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: min-content;
    margin-bottom: 10px;

    span {
      font-size: 13px;
      color: #999;
      font-weight: bold;
    }

    input {
      box-sizing: border-box;
      background: #fff;
      font-size: 15px;
      outline: none;
      padding: 8px 10px;
      color: #555;
      font-weight: bold;
      border: 1px solid #999;
      border-radius: 3px;
      width: 250px;
      margin: 0;

      &:disabled {
        color: #999;
      }
    }
  }
  button {
    height: 40px;
    width: 250px;
    padding: 0 20px;
    background: #7f8c8d;
    border: none;
    outline: none;
    border-radius: 4px;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 25px;
    cursor: pointer;

    transition: 0.3s;
    &:hover {
      opacity: 0.9;
    }

    &:disabled {
      background: #95a5a6;
      cursor: default;
    }
  }
`;
