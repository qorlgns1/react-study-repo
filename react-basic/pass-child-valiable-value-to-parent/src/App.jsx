import React, { useState, useEffect } from "react";

const Parent = () => {
  const [v, setV] = useState({
    a: 101,
    b: "hello",
    c: "world",
  });

  return (
    <div>
      <Child
        one={v.a}
        two={v.b}
        three={v.c}
        onChange={(value) => {
          console.log(v);
          return setV({ ...v, ...value });
        }}
      />
      {v.id}
    </div>
  );
};

const Child = (props) => {
  const [input, setInput] = useState();
  useEffect(() => {
    console.log("input", input);
  }, [input]);

  const onChange = (event) => {
    console.log(event);

    const { name, value } = event.target;
    console.log(name, value);
    // console.log(name)
    // console.log(value)
    // console.log(typeof name)
    // console.log(typeof value)

    setInput({ [name]: value }); // [name]은 구조분해할당 아니고, 대괄호가 없으면 'name'으로 들어가기 때문에 변수명으로 넣기 위한 코드이다.

    // setInput된 값이 전달되는게 아니라 setInput 되기 전의 값이 전달된다
    // 그 이유는 setInput은 비동기로 작동하기 떄문이다.
    props.onChange(input);
  };
  return (
    <div>
      <p>{props.one}</p>
      <p>{props.two}</p>
      <p>{props.three}</p>
      <input type="text" name="id" onChange={onChange} />
    </div>
  );
};

function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default App;
