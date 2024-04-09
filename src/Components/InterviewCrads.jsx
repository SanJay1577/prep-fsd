/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
function InterviewCards({ data }) {
  return (
    <>
      {data &&
        data?.map((val, idx) => <InterviewCard details={val} key={idx} />)}
    </>
  );
}

function InterviewCard({ details }) {
  function mapAllQuestions(ques) {
    return ques.map((val, idx) => <QuestionComponent ques={val} key={idx} />);
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <h2>{details.companyName}</h2>
      <h3>{details.role}</h3>
      <div>
        <ul> {mapAllQuestions(details.Questions)}</ul>
      </div>
      <p>{details.date}</p>
      <p>{details.location}</p>
    </div>
  );
}

function QuestionComponent({ ques, show, setShow }) {
  return <li>{ques}</li>;
}
export default InterviewCards;
