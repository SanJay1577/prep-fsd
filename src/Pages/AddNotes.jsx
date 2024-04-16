/* eslint-disable react/prop-types */
import AddNewForm from "../Components/AddNewForm";
import Header from "../Components/Header";
import MainComp from "../Components/MainComp";

export default function AddNotes({ interviewNotes, setInterviewNotes }) {
  return (
    <div>
      <Header></Header>
      <MainComp>
        <AddNewForm
          interviewNotes={interviewNotes}
          setInterviewNotes={setInterviewNotes}
        />
      </MainComp>
    </div>
  );
}
