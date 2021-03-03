import styled, { css } from "styled-components";

import { gridStyles } from "../../globalStyles/gridStyles";

export const Container = styled.div`
  height: ${`${gridStyles.default.numberSize}px`};
  width: ${`${gridStyles.default.numberSize}px`};
  min-height: ${`${gridStyles.default.numberSize}px`};
  min-width: ${`${gridStyles.default.numberSize}px`};

  ${props =>
    props.smallLayout &&
    css`
      height: ${`${gridStyles.small.numberSize}px`};
      width: ${`${gridStyles.small.numberSize}px`};
      min-height: ${`${gridStyles.small.numberSize}px`};
      min-width: ${`${gridStyles.small.numberSize}px`};
    `}

  @media screen and (max-device-height : 640px) and (orientation: landscape) {
    height: ${`${gridStyles.extraSmall.numberSize}px`};
    width: ${`${gridStyles.extraSmall.numberSize}px`};
    min-height: ${`${gridStyles.extraSmall.numberSize}px`};
    min-width: ${`${gridStyles.extraSmall.numberSize}px`};
  }

  background: #fff;
  border: 1px solid #999;
  border-radius: 4px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 18px;
    font-weight: 700;
    color: #718093;
  }
`;
