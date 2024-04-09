/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ParentCompoent() {
  const [data, setData] = useState("Data");
  function setNewDataFunc(newData) {
    setData(newData);
  }
  return (
    <>
      <h1>{data}</h1>
      <ChildComponent handleNewData={setNewDataFunc} />
    </>
  );
}
function ChildComponent({ handleNewData }) {
  const [inputField, setInputField] = useState("");
  return (
    <div>
      <input
        type="text"
        value={inputField}
        onChange={(e) => setInputField(e.target.value)}
      />

      <button onClick={() => handleNewData(inputField)}>SetNewData</button>
    </div>
  );
}
