/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
function InterviewCards({ data }) {
  return (
    <div className="flex flex-wrap gap-2 justify-around">
      {data &&
        data?.map((val, idx) => <InterviewCard details={val} key={idx} />)}
    </div>
  );
}

function InterviewCard({ details }) {
  function mapAllQuestions(ques) {
    return ques.map((val, idx) => <QuestionComponent ques={val} key={idx} />);
  }

  return (
    <div className="card w-96 bg-accent text-black p-2 rounded-lg">
      <h2 className="text-lg font-extrabold">{details.companyName}</h2>
      <h3 className="text-lg font-bold">{details.role}</h3>

      <div className="m-2">
        <div className="collapse border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-bold">Questions</div>
          <div className="collapse-content">
            <ul className="pl-2 p-2"> {mapAllQuestions(details.Questions)}</ul>
          </div>
        </div>
      </div>
      <p>
        <span className="font-bold">Date : </span> {details.date}
      </p>
      <p>
        <span className="font-bold">Location : </span> {details.location}
      </p>
    </div>
  );
}

function QuestionComponent({ ques, show, setShow }) {
  return <li>{ques}</li>;
}
export default InterviewCards;
