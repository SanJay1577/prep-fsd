/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

//A compoent which has accss to a state and can use updation and useffects
export function Statefull() {
  const [count, setCount] = useState();
  useEffect(() => {
    setCount(5);
  }, []);
  return (
    <div>
      <div>Statefull Counter {count}</div>
      <button onClick={() => setCount(count + 1)}>Add Counter</button>
      <Stateless count={count} />
    </div>
  );
}

//light weight component (it can have props)
function Stateless({ count }) {
  return <div>Stateless counter {count}</div>;
}
