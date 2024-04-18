/* eslint-disable react/prop-types */

import Header from "../Components/Header";

import MainComp from "../Components/MainComp";
import { AppState } from "../Context/AppContext";

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
  const { theme } = AppState(); //useContext(Appctx)
  return (
    <div>
      <p>ThirdComponent -------- {theme}</p>
    </div>
  );
}
