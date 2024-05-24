import Header from "../Components/Header.jsx";
import { Login } from "../Components/Login.jsx";
import MainComp from "../Components/MainComp.jsx";

export default function LoginPage() {
  return (
    <div>
      <Header></Header>
      <MainComp>
        <Login />
      </MainComp>
    </div>
  );
}
