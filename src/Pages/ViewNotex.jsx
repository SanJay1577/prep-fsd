/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Header from "../Components/Header";

import MainComp from "../Components/MainComp";
import { AppState } from "../Context/AppContext";
import { InterviewCard } from "../Components/InterviewCrads";
import { useNavigate } from "react-router-dom";

export const ViewNotex = ({ interviewNotes, setInterviewNotes }) => {
  const [userNotes, setUserNotes] = useState([]);
  const { userId } = AppState();

  useEffect(() => {
    const userData = interviewNotes.filter((val) => val.userId === userId);
    setUserNotes(userData);
  }, []);
  return (
    <div>
      <Header></Header>
      <MainComp>
        {userNotes && (
          <>
            <InterCardsWithAction
              data={userNotes}
              setUserNotes={setUserNotes}
              interviewNotes={interviewNotes}
              setInterviewNotes={setInterviewNotes}
            />
          </>
        )}
      </MainComp>
    </div>
  );
};

function InterCardsWithAction({
  data,
  setUserNotes,
  interviewNotes,
  setInterviewNotes,
}) {
  return (
    <div className="flex flex-wrap gap-2 justify-around">
      {data &&
        data?.map((val, idx) => (
          <UserInterviewCard
            details={val}
            key={idx}
            setUserNotes={setUserNotes}
            interviewNotes={interviewNotes}
            setInterviewNotes={setInterviewNotes}
            userNotes={data}
          />
        ))}
    </div>
  );
}

function UserInterviewCard({
  details,
  userNotes,
  setUserNotes,
  interviewNotes,
  setInterviewNotes,
}) {
  const navigate = useNavigate();
  function deleteInterviewNotes(id) {
    fetch(`https://6614abd32fc47b4cf27cb460.mockapi.io/inter/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const afterDelete = userNotes.filter((notes) => notes.id != id);
          const interviewData = interviewNotes.filter(
            (notes) => notes.id != id
          );
          setUserNotes([...afterDelete]);
          setInterviewNotes([...interviewData]);
        } else {
          console.log("Error occured");
        }
      })
      .catch((err) => {
        console.log("Error in catch", err);
      });
  }
  return (
    <div className="card w-max bg-neutral text-black p-2 rounded-lg">
      <InterviewCard details={details} />
      <div className="join justify-center">
        <button
          className="btn join-item bg-violet-600"
          onClick={() => navigate(`/edit/interview/${details.id}`)}
        >
          Edit
        </button>
        <button
          className="btn join-item bg-error"
          onClick={() => deleteInterviewNotes(details.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
