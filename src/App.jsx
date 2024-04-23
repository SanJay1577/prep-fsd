/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./Pages/Landing";
import Profile from "./Pages/Profile";
import { Routes, Route } from "react-router-dom";
import AddNotes from "./Pages/AddNotes";
import { ViewNotex } from "./Pages/ViewNotex";
import AppContext, { AppState } from "./Context/AppContext";
import EditNotes from "./Pages/EditNotes";

function App() {
  //States
  const [interviewNotes, setInterviewNotes] = useState([]);
  const { theme } = AppState();
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
    <div data-theme={theme}>
      <Routes>
        <Route exact path="/" element={<LandingPage data={interviewNotes} />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route
          path="*"
          element={<h1 className="text-light">404 NO Page Found</h1>}
        />
        <Route
          path="/add/interview"
          element={
            <AddNotes
              interviewNotes={interviewNotes}
              setInterviewNotes={setInterviewNotes}
            />
          }
        />
        <Route
          path="/edit/interview/:id"
          element={
            <EditNotes
              interviewNotes={interviewNotes}
              setInterviewNotes={setInterviewNotes}
            />
          }
        />
        <Route
          path="/view/notes"
          element={
            <ViewNotex
              interviewNotes={interviewNotes}
              setInterviewNotes={setInterviewNotes}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
