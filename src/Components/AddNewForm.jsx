import { useState } from "react";

export default function AddNewForm() {
  //states for the fields
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [question, setQuestions] = useState([""]);
  const [data, setData] = useState("");

  //handlers
  function handleSubmit(e) {
    const dataSet = {
      companyName,
      role,
      date,
      location,
      question,
    };
    e.preventDefault();
    setData(JSON.stringify(dataSet));
  }

  function addNewQuestionField() {
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
          Add New Interview Data
        </div>
        <form className="grid grid-cols-1 gap-4 p-5 " onSubmit={handleSubmit}>
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
          >
            Submit
          </button>
        </form>
        <div className="text-lg">{data}</div>
      </div>
    </div>
  );
}
