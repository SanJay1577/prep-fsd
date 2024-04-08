//Life cylce of an component

import { useEffect, useState } from "react";

export default function LifeCycleComponent() {
  //initialization
  const [show, setShow] = useState(true);
  //mounting
  useEffect(() => {
    console.log("component mounting handled");
    //unmounting api token -> remove
    return () => {
      console.log("unmounting handled");
      setTimeout(() => {
        //updation
        setShow(!show);
      }, 5000);
    };
  }, []);

  if (!show) {
    return null;
  }

  return <div> Timer : {show.toString()}</div>;
}
