import React, { useState, useEffect } from "react";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    userDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userDetails = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);

      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="home">
      <div className="Container">
        <p>WELCOME</p>
        <h2>{userName}</h2>
        <h3>{show ? "Happy, to see you back" : "We Are The MERN Developer"}</h3>
      </div>
    </div>
  );
};

export default Home;
