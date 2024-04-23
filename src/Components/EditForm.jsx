/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function EditInterviewForm({
  editId,
  interviewNotes,
  setInterviewNotes,
}) {
  //states for the fields
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [question, setQuestions] = useState([""]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [notesIndex, setNotesIndex] = useState(0);

  useEffect(() => {
    const selectedNotes = interviewNotes.filter((notes) => notes.id === editId);
    const index = interviewNotes.indexOf(selectedNotes[0]);
    setNotesIndex(index);
    console.log(selectedNotes);
    setCompanyName(selectedNotes[0].companyName);
    setRole(selectedNotes[0].role);
    setDate(selectedNotes[0].date);
    setQuestions([...selectedNotes[0].questions]);
    setLocation(selectedNotes[0].location);
  }, []);

  //handlers
  function handleSubmit(e) {
    e.preventDefault();
    const dataSet = {
      companyName,
      role,
      date,
      location,
      question,
    };
    fetch(`https://6614abd32fc47b4cf27cb460.mockapi.io/inter/${editId}`, {
      method: "PUT",
      body: JSON.stringify(dataSet),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        interviewNotes[notesIndex] = data;
        setInterviewNotes([...interviewNotes]);
      })
      .then(() => setSuccessMessage("Data updated successfully"))
      .catch((err) => {
        console.log(err);
        setErrorMessage("Error Adding new Data");
      });
  }

  function addNewQuestionField(e) {
    e.preventDefault();
    const list = [...question, ""];
    setQuestions(list);
  }

  function handleQuestions(event, index) {
    const list = [...question];
    list[index] = event.target.value;
    setQuestions(list);
  }

  return (
    <div>
      <div className="artboard bg-base-100 p-5 rounded-lg ">
        <div className="text-accent text-center text-xl font-bold">
          Edit Interview Notes
        </div>
        <form className="grid grid-cols-1 gap-4 p-5 ">
          <input
            className="p-3 rounded-lg"
            placeholder="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <input
            className="p-3 rounded-lg"
            placeholder="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <div className="grid grid-cols-2 place-items-center">
            <p className="text-lg text-accent font-bold "> Add questions</p>
            <button
              className="btn btn-accent w-24"
              onClick={addNewQuestionField}
            >
              Add
            </button>
          </div>
          {question?.map((ques, index) => (
            <input
              key={index}
              className="p-3 rounded-lg border-4 border-accent"
              placeholder="questions"
              onChange={(e) => handleQuestions(e, index)}
              value={ques}
            />
          ))}
          <input
            className="p-3 rounded-lg"
            placeholder="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            className="p-3 rounded-lg"
            placeholder="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            className="btn btn-accent place-self-center w-24"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        {successMessage ? (
          <div className="text-success text-center font-bold text-lg">
            {successMessage}
          </div>
        ) : (
          ""
        )}
        {errorMessage ? (
          <div className="text-error text-center font-bold text-lg">
            {errorMessage}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
