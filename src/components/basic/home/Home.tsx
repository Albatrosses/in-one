import React from "react";
import ScreenProtector from "../../common/screen-protector/ScreenProtector";
import { HomeWrapper } from "./Home.style";

const Home: React.FC<any> = () => {
  return (
    <HomeWrapper>
      <ScreenProtector />
    </HomeWrapper>
  );
};

export default Home;
