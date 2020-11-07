import styled from "styled-components";

export const Container = styled.div`
  height: 64px;
  width: 64px;

  min-height: 64px;
  min-width: 64px;

  background-color: #f5f6fa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  box-sizing: border-box;
  border: 1px dashed #dcdde1;
  border-radius: 4px;

  .correct-number {
    font-size: 16px;
    color: #dcdde1;
  }
`;
