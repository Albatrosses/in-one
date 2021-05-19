import styled from "styled-components";
import {
  Color,
  FontSize,
  LineHeight,
  Media,
  Shadow,
  Width,
} from "../../../constants/style";

export const PluginListWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .nav {
    flex: 0 0 80px;
    height: 80px;
    width: 100%;
  }
  .plugin-list {
    flex: auto;
    height: 100%;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    background-color: ${Color.Gray};
    .plugin-list-container {
      margin: 0 auto;
      padding: 32px 0;
      max-width: ${Width.Max};
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(184px, 1fr));
      grid-template-rows: repeat(auto-fill, minmax(184px, 1fr));
      place-items: center center;
      overflow-y: auto;
      ${Media.Tablet} {
        padding: 12px 0;
      }
      ${Media.Mobile} {
        padding: 12px 0;
      }
      .plugin-card {
        height: 160px;
        width: 160px;
        border-radius: 4px;
        box-sizing: border-box;
        cursor: pointer;
        background-color: ${Color.White};
        box-shadow: ${Shadow.Normal};
        padding: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:hover {
          box-shadow: ${Shadow.Down1};
        }
        .plugin-logo {
          flex: auto;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            height: 64px;
            width: 64px;
          }
        }
        .plugin-label {
          flex: 0 0 ${LineHeight.Label};
          height: ${LineHeight.Label};
          width: 100%;
          font-size: ${FontSize.Label};
          text-align: center;
        }
      }
    }
  }
`;
