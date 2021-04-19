import styled from "styled-components";
import { Color, FontSize } from "../../../constants/enum";

export const PluginListWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .nav {
    flex: 0 0 80px;
  }
  .plugin-list {
    flex: auto;
    overflow: hidden;
    padding: 32px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    .plugin-card {
      margin: 0 32px 32px 0;
      border: 1px solid ${Color.Border};
      box-shadow: 0px 1px ${Color.Shadow};
      height: 320px;
      width: 240px;
      border-radius: 6px;
      box-sizing: border-box;
      background-color: ${Color.White};
      cursor: pointer;
      &:hover {
        background-color: ${Color.Border};
      }
      .plugin-logo {
        height: 50%;
        width: 100%;
      }
      .plugin-content {
        height: 50%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .plugin-label {
          font-size: ${FontSize.Label};
          align-self: center;
        }
      }
    }
  }
`;
