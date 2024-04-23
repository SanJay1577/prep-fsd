/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { useState } from "react";
import { interviewSchema } from "../Schema/schema";

export default function AddNewForm({ interviewNotes, setInterviewNotes }) {
  // formik implemention(form validation)
  const {
    values,
    handleChange,
    setValues,
    handleSubmit,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      companyName: "",
      role: "",
      date: "",
      location: "",
      questions: [""],
      userId: "1",
    },
    validationSchema: interviewSchema,
    onSubmit: (newInterviewData) => {
      addNewInterviewNotes(newInterviewData);
    },
  });
  //states for the fields
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //handlers
  function addNewInterviewNotes(newInterviewNote) {
    fetch("https://6614abd32fc47b4cf27cb460.mockapi.io/inter", {
      method: "POST",
      body: JSON.stringify(newInterviewNote),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setInterviewNotes([...interviewNotes, data]))
      .then(() => setSuccessMessage("New Data Added Succesfuly"))
      .catch((err) => {
        console.log(err);
        setErrorMessage("Error Adding new Data");
      });
  }

  function addNewQuestionsField(e) {
    e.preventDefault();
    console.log("hanlde questionss");
    setValues({ ...values, questions: [...values.questions, ""] });
  }

  // function handleQuestionss(event, index) {
  //   const list = [...questions];
  //   list[index] = event.target.value;
  //   setQuestionss(list);
  // }

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
            value={values.companyName}
            name="companyName"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.companyName && errors.companyName ? (
            <div className="text-error text-center">{errors.companyName}</div>
          ) : (
            ""
          )}
          <input
            className="p-3 rounded-lg"
            placeholder="role"
            value={values.role}
            name="role"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.role && errors.role ? (
            <div className="text-error text-center">{errors.role}</div>
          ) : (
            ""
          )}
          <div className="grid grid-cols-2 place-items-center">
            <p className="text-lg text-accent font-bold "> Add questionss</p>
            <button
              className="btn btn-accent w-24"
              onClick={addNewQuestionsField}
            >
              Add
            </button>
          </div>
          {values.questions?.map((ques, index) => (
            <>
              <input
                key={index}
                name={`questions.${index}`}
                value={ques}
                className="p-3 rounded-lg border-4 border-accent"
                placeholder="Enter new questions"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.questions && errors.questions ? (
                <div className="text-error text-center">Please fill</div>
              ) : (
                ""
              )}
            </>
          ))}

          <input
            className="p-3 rounded-lg"
            placeholder="date"
            type="date"
            name="date"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.date && errors.date ? (
            <div className="text-error text-center">{errors.date}</div>
          ) : (
            ""
          )}

          <input
            className="p-3 rounded-lg"
            placeholder="location"
            name="location"
            value={values.location}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.location && errors.location ? (
            <div className="text-error text-center">{errors.location}</div>
          ) : (
            ""
          )}

          <button
            className="btn btn-accent place-self-center w-24"
            type="submit"
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
