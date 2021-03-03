import styled, { css } from "styled-components";
import { gridStyles } from "../../globalStyles/gridStyles";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: ${`${gridStyles.default.gridGap}px`};
  padding: ${`${gridStyles.default.gridPadding}px`};
  grid-template-rows: min-content;
  border: 1px solid #dcdde1;
  border-radius: 10px;

  ${props =>
    props.smallLayout &&
    css`
      grid-gap: ${`${gridStyles.small.gridGap}px`};
      padding: ${`${gridStyles.small.gridPadding}px`};
    `}

  @media (max-device-height : 670px) and (orientation: landscape) {
    grid-gap: ${`${gridStyles.extraSmall.gridGap}px`};
    padding: ${`${gridStyles.extraSmall.gridPadding}px`};
  }

  ${props =>
    props.showCorrectNumbers
      ? css`
          .correct-number {
            display: block;
          }
        `
      : css`
          .correct-number {
            display: none;
          }
        `}
  ${props =>
    props.showMistakes &&
    css`
      .wrong-number {
        div {
          background-color: #ffe100;
        }
      }
    `}
`;
