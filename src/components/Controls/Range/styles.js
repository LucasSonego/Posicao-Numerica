import styled from "styled-components";

export const Container = styled.input`
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #00a8ff;
    color: #00a8ff;
    height: 30px;
    width: 25px;
    border-radius: 10px;
    margin-top: -7px;
  }
  &::-moz-range-thumb {
    background-color: #00a8ff;
    color: #00a8ff;
    height: 30px;
    width: 25px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  &::-ms-thumb {
    background-color: #00a8ff;
    color: #00a8ff;
    height: 30px;
    width: 25px;
    border-radius: 10px;
  }

  &::-webkit-slider-runnable-track {
    height: 14px;
    width: 100%;
    background-color: #dcdde1;
    border-radius: 6px;
    cursor: pointer;
  }
  &::-moz-range-track {
    height: 14px;
    width: 100%;
    background-color: #dcdde1;
    border-radius: 6px;
    cursor: pointer;
  }
  &::-ms-track {
    height: 14px;
    width: 100%;
    background-color: #dcdde1;
    border-radius: 6px;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
