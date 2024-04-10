/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./App.css";
import InterviewCards from "./Components/InterviewCrads";
import ParentCompoent from "./UnUsedComponents/ChildrenToParent";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import SideDrawer from "./Components/SideDrawer";
import NavigationList from "./Components/NavigationList";
import Content from "./Components/Content";
import MainComp from "./Components/MainComp";
import LandingPage from "./Pages/Landing";

function App() {
  //States
  const [interviewNotes, setInterviewNotes] = useState([]);
  //mounting
  useEffect(() => {
    fetch("https://6614abd32fc47b4cf27cb460.mockapi.io/inter", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setInterviewNotes(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <LandingPage data={interviewNotes} />
    </>
  );
}

export default App;
