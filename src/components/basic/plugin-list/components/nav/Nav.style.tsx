import styled from "styled-components";
import { Color, FontSize, LineHeight, Media } from "../../../../../constants/style";

export const NavWrapper = styled.nav`
  width: 100%;
  height: 80px;
  background-color: ${Color.Black};
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
    display: flex;
    align-items: center;
    img {
      height: 48px;
    }
  }
  .search {
    font-size: ${FontSize.Label};
    line-height: ${LineHeight.Label};
  }
`;
