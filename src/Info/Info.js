import React from "react";
import {useHistory} from "react-router-dom";

export default function Info(props) {
  let history = useHistory();
  const path = history.location.pathname;
  if (path.includes("Member")) {
    return <h1>Here are the steps to log in</h1>;
  }
  if (path.includes("Close")) {
    return <h1>Fill out the below information to potentially gain access</h1>
  }
  // where conditional info for login will return
  return <h1>hi</h1>;
}
