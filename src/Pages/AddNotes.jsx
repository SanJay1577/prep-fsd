import AddNewForm from "../Components/AddNewForm";
import Header from "../Components/Header";
import MainComp from "../Components/MainComp";

export default function AddNotes() {
  return (
    <div>
      <Header></Header>
      <MainComp>
        <AddNewForm />
      </MainComp>
    </div>
  );
}
