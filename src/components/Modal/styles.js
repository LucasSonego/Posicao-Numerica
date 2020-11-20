import styled, { css } from "styled-components";

export const Container = styled.div`
  .content {
    z-index: 50;
    height: 200px;
    width: 500px;
    background: #fff;
    border-radius: 15px;
    padding: 50px;
    box-sizing: border-box;
    box-shadow: 1px 1px 4px #999;
    position: absolute;

    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s cubic-bezier(0.6, 0, 0.4, 1);
    ${props =>
      props.visible
        ? css`
            top: 50%;
          `
        : css`
            top: -20%;
          `}
  }

  .backdrop {
    z-index: 10;
    height: 100vh;
    width: 100vw;
    position: absolute;
    background: #3332;
  }
`;
