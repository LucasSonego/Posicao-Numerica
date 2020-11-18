import styled, { css } from "styled-components";

export const Container = styled.div`
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
`;
