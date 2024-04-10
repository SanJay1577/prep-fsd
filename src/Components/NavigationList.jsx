export default function NavigationList() {
  return (
    <ul className="flex flex-col gap-8">
      <li>
        <button className="btn btn-wide bg-accent text-white  hover:bg-violet-600">
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
