import React from "react";
import useInput from "./Hook/useInput";

function InputComponent() {
  const [value, onChange] = useInput("");
  return (
    <>
      <input type="text" onChange={onChange} />
      <div>{value}가 강해졌다 돌격해!</div>
    </>
  );
}
export default InputComponent;
