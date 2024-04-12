/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import MainComp from "../Components/MainComp";

export default function Profile() {
  // state to store user
  const [user, setUser] = useState({});
  // eslint-disable-next-line no-unused-vars
  const { userId } = useParams();
  //Get User profile infomation
  useEffect(() => {
    fetch(`https://6614abd32fc47b4cf27cb460.mockapi.io/User/${userId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <>
      <Header></Header>
      <MainComp>
        <User user={user} />
      </MainComp>
    </>
  );
}

function User({ user }) {
  function caculatePerfomamce() {
    let performance = (user.con_count / user.int_count) * 100;
    return performance.toFixed(2);
  }

  return (
    <>
      {user && (
        <div className="flex justify-center">
          <div className=" flex items-center gap-6 flex-col p-4 rounded-lg artboard phone-1 bg-base-100">
            <div>
              <div className="avatar">
                <div className="w-56 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="font-sans text-2xl font-bold leading-loose">
                {user.username}
              </p>
              <p className="font-sans text-xl leading-loose">{user.email}</p>
              <p className="font-sans text-xl leading-loose">{user.role}</p>
              <p className="ordinal text-md leading-loose">
                Interview Count : {user.int_count}
              </p>
              <p className="ordinal text-md leading-loose">
                Converted Count : {user.con_count}
              </p>
              <p className="ordinal text-md leading-loose">
                Performance : {caculatePerfomamce()} %
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
