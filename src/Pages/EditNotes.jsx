/* eslint-disable react/prop-types */

import EditInterviewForm from "../Components/EditForm";
import Header from "../Components/Header";
import MainComp from "../Components/MainComp";
import { useParams } from "react-router-dom";

export default function EditNotes({ interviewNotes, setInterviewNotes }) {
  const { id } = useParams();

  return (
    <div>
      <Header></Header>
      <MainComp>
        <EditInterviewForm
          editId={id}
          interviewNotes={interviewNotes}
          setInterviewNotes={setInterviewNotes}
        />
      </MainComp>
    </div>
  );
}
