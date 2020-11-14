import styled, { css } from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  background-color: #dcdde1;
  height: 28px;
  min-height: 28px !important;
  width: 48px;
  min-width: 48px !important;
  border-radius: 20px;
  padding: 4px;
  box-sizing: border-box;
  transition: 0.3s ease-in-out;
  .ball {
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: white;
    transition: 0.3s ease-out;
  }
  ${props =>
    props.value
      ? css`
          .ball {
            margin-left: 19px;
          }
          background-color: #00a8ff;
        `
      : css`
          .ball {
            margin-left: 0px;
          }
          background-color: #dedde1;
        `}
`;
