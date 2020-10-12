
import React from "react";

export default function Eval(props) {
  console.log(props);
  // this is where eval process would happen
  let auth = true;
  if (auth) {
    props.history.push({
      pathname: "/dash",
      state: {
        test: props.location.state,
      },
    });
  }
  else {
    props.history.push("/login")
  }
  return <h1>hi</h1>;
}
