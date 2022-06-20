import React, { useState, useRef } from "react";

const App = () => {
  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값

  // useRef() 를 사용 할 때 파라미터를 넣어주면, 이 값이 .current 값의 기본값이 된다.
  const emailInput = useRef(""); // email input에 대한 useRef
  const pwInput = useRef(null); // pw input에 대한 useRef

  console.log("emailInput", emailInput);

  const inputCheck = (e) => {
    e.preventDefault();

    console.log(emailInput);
    console.log(pwInput);
    console.log(emailInput.current.value);
    console.log(pwInput.current.value);

    if (emailInput.current.value === "") {
      alert("이메일을 입력해주세요");
      emailInput.current.focus();
      return;
    } else if (pwInput.current.value === "") {
      alert("비밀번호를 입력해주세요");
      console.log(pwInput);
      pwInput.current.focus();
      return;
    }

    setEmailValue(emailInput.current.value);
    setPwValue(pwInput.current.value);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" ref={emailInput} />
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput} />
      </label>

      <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
        로그인
      </button>
      <span>입력한 이메일 : {emailValue}</span>
      <span>입력한 비밀번호 : {pwValue}</span>
    </form>
  );
};

export default App;
