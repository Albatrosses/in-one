import styled from "styled-components";
import { BackgroundColor, Color, FontSize, LineHeight, Media } from "../../../../../constants/style";

export const NavWrapper = styled.nav`
  width: 100%;
  height: 80px;
  background-color: ${BackgroundColor.Dark3};
  color: ${Color.White};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  box-sizing: border-box;
  ${Media.Mobile} {
    height: 56px;
  }
  .title {
    font-size: ${FontSize.Title};
    line-height: ${LineHeight.Title};
  }
  .search {
    font-size: ${FontSize.Label};
    line-height: ${LineHeight.Label};
  }
`;
