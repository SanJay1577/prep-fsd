/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function NavigationList() {
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState("1");
  const navigate = useNavigate();
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
        <button className="btn btn-wide bg-accent text-white hover:bg-violet-600">
          AddNotes
        </button>
      </li>
      <li>
        <button className="btn btn-wide bg-accent text-white hover:bg-violet-600">
          ViewNotes
        </button>
      </li>
      <li>
        <button className="btn btn-wide bg-accent text-white hover:bg-violet-600">
          MyInterview
        </button>
      </li>
    </ul>
  );
}
