/* eslint-disable react/prop-types */
import { useContext } from "react";
import Header from "../Components/Header";

import MainComp from "../Components/MainComp";
import { AppCtx } from "../Context/AppContext";

export const ViewNotex = () => {
  return (
    <div>
      <Header></Header>

      <MainComp>
        <FirstComponet />
      </MainComp>
    </div>
  );
};

function FirstComponet() {
  return (
    <div>
      <p>FirstComponet</p>
      <SecondComponent />
    </div>
  );
}
function SecondComponent() {
  return (
    <div>
      <p>SecondComponent</p>
      <ThirdComponent />
    </div>
  );
}
function ThirdComponent() {
  // Third step
  const { theme } = useContext(AppCtx);
  return (
    <div>
      <p>ThirdComponent -------- {theme}</p>
    </div>
  );
}
