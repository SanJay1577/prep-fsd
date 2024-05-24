/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function NavigationList() {
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState("1");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <ul className="flex flex-col gap-8">
      <li>
        <button
          className="btn btn-wide bg-accent text-white  hover:bg-violet-600"
          onClick={() => navigate("/")}
        >
          Dashboard
        </button>
      </li>

      <li>
        <button
          className="btn btn-wide bg-accent text-white  hover:bg-violet-600"
          onClick={() => navigate(`/profile/${id}`)}
        >
          Profile
        </button>
      </li>
      <li>
        <button
          className="btn btn-wide bg-accent text-white hover:bg-violet-600"
          onClick={() => navigate(`/add/interview`)}
        >
          AddNotes
        </button>
      </li>
      <li>
        <button
          className="btn btn-wide bg-accent text-white hover:bg-violet-600 "
          onClick={() => navigate(`/view/notes`)}
        >
          ViewNotes
        </button>
      </li>
      <li>
        <button
          className="btn btn-wide bg-accent text-white hover:bg-violet-600"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </li>
      <li>
        <button
          className="btn btn-wide bg-accent text-white hover:bg-violet-600"
          onClick={handleLogout}
        >
          logout
        </button>
      </li>
    </ul>
  );
}
