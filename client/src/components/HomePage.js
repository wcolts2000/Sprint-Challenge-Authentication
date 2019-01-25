import React from "react";

function HomePage(props) {
  return (
    <div>
      <button onClick={props.history.push("/register")}>Register Now</button>
      <button onClick={props.history.push("/login")}>Login Now</button>
      <button onClick={props.history.push("/joke-bin")}>
        The Joke Factory
      </button>
    </div>
  );
}

export default HomePage;
