import styled, { css } from "styled-components";

import { gridStyles } from "../../globalStyles/gridStyles";

export const Container = styled.div`
  height: ${`${gridStyles.default.slotSize}px`};
  width: ${`${gridStyles.default.slotSize}px`};
  min-height: ${`${gridStyles.default.slotSize}px`};
  min-width: ${`${gridStyles.default.slotSize}px`};
  padding: ${`${gridStyles.default.slotPadding}px`};

  ${props =>
    props.smallLayout &&
    css`
      height: ${`${gridStyles.small.slotSize}px`};
      width: ${`${gridStyles.small.slotSize}px`};
      min-height: ${`${gridStyles.small.slotSize}px`};
      min-width: ${`${gridStyles.small.slotSize}px`};
      padding: ${`${gridStyles.small.slotPadding}px`};
    `}

  @media (max-device-height : 670px) and (orientation: landscape) {
    height: ${`${gridStyles.extraSmall.slotSize}px`};
    width: ${`${gridStyles.extraSmall.slotSize}px`};
    min-height: ${`${gridStyles.extraSmall.slotSize}px`};
    min-width: ${`${gridStyles.extraSmall.slotSize}px`};
    padding: ${`${gridStyles.extraSmall.slotPadding}px`};
  }

  background-color: #f5f6fa;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 1px dashed #dcdde1;
  border-radius: 4px;

  .correct-number {
    font-size: 16px;
    color: #dcdde1;
  }
`;
