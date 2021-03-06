import styled, { css } from "styled-components";

import { gridStyles } from "../../globalStyles/gridStyles";

export const Container = styled.div`
  padding: 20px;
  box-sizing: border-box;
  background: #f5f6fa;
  border: 2px dashed #dcdde1;
  border-radius: 10px;
  box-sizing: border-box;
  min-height: ${`${gridStyles.default.numberSize * 3 + 44}px`};
  min-width: ${`${gridStyles.default.numberSize + 44}px`};

  ${props =>
    props.smallLayout &&
    css`
      min-width: ${`${gridStyles.small.numberSize + 44}px`};
      min-height: ${`${gridStyles.small.numberSize * 3 + 44}px`};
    `}
`;
