/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./App.css";
import InterviewCards from "./Components/InterviewCrads";

function App() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <InterviewCards data={data} />
    </>
  );
}

export default App;
