import styled, { css } from "styled-components";

export const Rotate = styled.div`
  @media screen and (orientation: landscape) {
    display: none;
  }

  @keyframes rotate {
    0% {
      transform: rotate(45deg);
    }
    70% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;

  .icon {
    width: min-content;
    animation: rotate 2s infinite;
  }

  svg {
    height: 70px;
    width: 70px;
    color: #555;
  }
`;

export const Container = styled.div`
  @media screen and (max-device-width: 640px) and (orientation: portrait) {
    display: none;
  }

  .application {
    display: flex;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
  }

  ${props =>
    props.largeScreen
      ? css`
          .application {
            justify-content: center;
            div:first-child {
              margin-right: 245px;
              max-width: min-content;
            }

            div {
              div:first-child {
                margin-right: 0px;
              }
            }
          }
        `
      : css`
          .application {
            justify-content: space-around;
          }
        `}
  .modal-content {
    height: 150px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      margin: 0;
      padding: 0;
      color: #444;
    }
    h4 {
      margin: 0;
      color: #777;
      margin-bottom: 10px;
    }
    .buttons {
      display: flex;
      justify-content: space-around;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        outline: none;
        padding: 10px 15px;
        border-radius: 4px;
        width: 150px;
        font-family: inherit;
        font-size: 16px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;

        transition: 0.3s;
        &:hover {
          opacity: 0.9;
        }

        span {
          margin-right: 10px;
        }
      }

      .restart {
        background-color: #44bd32;
        svg {
          height: 18px;
          width: 18px;
          margin-right: 10px;
        }
      }

      .options {
        svg {
          height: 16px;
          width: 16px;
          margin-right: 10px;
        }
        background-color: #0097e6;
      }
    }
  }
`;
