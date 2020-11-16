import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 10px;
  grid-template-rows: 64px;
  padding: 20px;
  border: 1px solid #dcdde1;
  border-radius: 10px;

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
    props.showMistakes
      ? css`
          .wrong-number {
            background-color: #fbc531;
          }
        `
      : css`
          .wrong-number {
            background-color: #f5f6fa;
          }
        `}
`;
