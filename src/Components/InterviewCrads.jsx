/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function InterviewCards({ data }) {
  return (
    <>
      {data &&
        data?.map((val, idx) => <InterviewCard details={data} key={idx} />)}
    </>
  );
}

function InterviewCard({ details }) {
  return (
    <div>
      <h2>Company Name</h2>
      <h3>Role</h3>
      <p>Questions</p>
      <p>Answers</p>
      <p>converted</p>
      <p>date</p>
    </div>
  );
}

export default InterviewCards;
