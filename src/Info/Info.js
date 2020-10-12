import React from "react";
import {useHistory} from "react-router-dom";

export default function Info() {
  let history = useHistory();
  const path = history.location.pathname;
  if (path.includes("Member")) {
    return <h1>Here are the steps to log in</h1>;
  }
  if (path.includes("Close")) {
    return <h1>Fill out the below information to potentially gain access</h1>;
  }
  if (path.includes("New")) {
    return (
      <div>
        <h1>This is a closed-circuit site for a family</h1>
        <h1>Interested in learning more? </h1>
        <h1>Want one for your own family?</h1>
      </div>
    );
  }
}
