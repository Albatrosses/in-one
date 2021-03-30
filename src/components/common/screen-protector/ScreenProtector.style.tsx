import styled from "styled-components";

export const ScreenProtectorWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  box-sizing: border-box;
  color: #ffffff;
  .hello-world {
    font-size: 64px;
    line-height: 64px;
    font-weight: 100;
  }
  .time-stamp {
    font-size: 256px;
    line-height: 256px;
    font-weight: 500;
    margin-top: 64px;
  }
  .date-stamp {
    font-size: 32px;
    line-height: 32px;
    font-weight: 100;
    margin-top: 64px;
    width: 588px;
    display: flex;
    justify-content: space-between;
  }
`;
