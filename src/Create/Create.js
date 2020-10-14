import React from "react";
import {useHistory} from "react-router-dom";

export default function Create() {
  // This is where account creation will happen
  const history = useHistory();
  const prompts = ["New Here?", "Family Member?", "Close enough to Family?"];
  let buttonContent = (prompt) => {
    return (
      <li>
        <button
          onClick={() =>
            history.push({
              pathname: `/info/${prompt}`,
              state: {
                state: {
                  test: {prompt},
                },
              },
            })
          }
        >
          {prompt}
        </button>
      </li>
    );
  };
  // probably make these onClick functions dynamic by adding in contional of event location?
  return (
    <div>
      <ul>
        <h1>Glad to see you here!</h1>
        {prompts.map((prompt) => buttonContent(prompt))}
      </ul>
    </div>
  );
}
