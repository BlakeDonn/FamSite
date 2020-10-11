import React from "react"

function Eval(props) {
  console.log(props)
  // this is where eval process would happen
  let auth = true;
  auth ? props.history.push("/dashboard") : props.history.push("/login")
  return (<h1>hi</h1>)
}
export default Eval
