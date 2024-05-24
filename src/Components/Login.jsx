import { useState } from "react";
import { BASE_API, USER_BASE_API } from "../Api";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    fetch(`${BASE_API}${USER_BASE_API}login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setErrMsg(data.error);
        } else {
          localStorage.setItem("token", data.token);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="artboard bg-base-100 p-5 rounded-lg ">
      <div className="text-accent text-center text-xl font-bold">Login</div>
      <form className="grid grid-cols-1 gap-4 p-5 ">
        <input
          className="p-3 rounded-lg"
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-3 rounded-lg"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-accent place-self-center w-24"
          onClick={handleLogin}
        >
          Login
        </button>
        {errMsg ? <div className="text-error text-center">{errMsg}</div> : ""}
      </form>
      <div>
        <span>Not registered </span>

        <button
          className="btn btn-wide bg-accent text-white hover:bg-violet-600"
          onClick={() => navigate("/signup")}
        >
          singup
        </button>
      </div>
    </div>
  );
}
