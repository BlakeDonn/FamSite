import React from "react";
import {Link, useHistory} from "react-router-dom";

export default function Create() {
  // This is where account creation will happen
  const history = useHistory({});
  console.log(history);
  // probably make these onClick functions dynamic by adding in contional of event location?
  return (
    <div>
      <ul>
        <h1>Glad to see you here!</h1>
        <li>
          <button
            onClick={() =>
              history.push({
                pathname: "/create",
                state: {
                  state: {
                    test: "New Here?",
                  },
                },
              })
            }
          >New Here?</button>
        </li>
        <li>
          <button onClick={() => history.push("/")}>Family Member?</button>
        </li>
        <li>
          <button onClick={() => history.push("/")}>
            Close enough to Family?
          </button>
        </li>
      </ul>
    </div>
  );
}
