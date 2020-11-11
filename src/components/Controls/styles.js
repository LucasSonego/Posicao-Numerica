import styled, { css } from "styled-components";

export const Container = styled.div`
  .toggle-controls {
    position: absolute;
    top: 0px !important;
    left: 0px !important;
    background: none;
    border: none;
    outline: none;
    padding: 0px;
    height: 50px;
    width: 50px;
    cursor: pointer;

    svg {
      height: 30px;
      width: 30px;
      color: #718093;
      transition: 0.5s;
    }

    &:hover {
      svg {
        transform: scale(1.1);
        transform: rotate(20deg);
      }
    }
  }
`;

export const ControlsContainer = styled.div`
  transition: 0.3s ease-in-out;
  z-index: 995;
  overflow: hidden;
  position: absolute;
  height: 100vh;
  width: 400px;
  padding: 40px;
  box-sizing: border-box;

  background-color: #f5f6fa;

  ${props =>
    props.expanded
      ? css`
          top: 0px !important;
          left: 0px !important;
        `
      : css`
          top: 0px !important;
          left: -400px !important;
        `}

  .size-controller {
    flex-direction: column;
    width: 100%;
    p {
      font-size: 16px;
      font-weight: bold;
      color: #718093;
    }

    button {
      margin-top: 20px;
      border: none;
      outline: none;
      padding: 15px 25px;
      font-size: 16px;
      font-family: inherit;
      font-weight: 500;
      color: #fff;
      background: #00a8ff;
      border-radius: 8px;
      width: 100%;
      cursor: pointer;

      transition: 0.5s;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  .range {
    display: flex;
    align-items: center;
    span {
      font-size: 20px;
      font-weight: bold;
      color: #718093;
      margin-left: 20px;
    }

    input[type="range"] {
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
    }
  }
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;