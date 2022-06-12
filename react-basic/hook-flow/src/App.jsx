import React, { useState, useEffect } from "react";

const Child = () => {
  console.log("   Child render start");

  const [input, setInput] = useState(() => {
    console.log("   Child lazy loading input");
    return "";
  });

  useEffect(() => {
    console.log("   Child useEffect 아무것도 설정안함");

    return () => {
      console.log("   Child useEffect [CLEANUP] 아무것도 설정안함");
    };
  });

  useEffect(() => {
    console.log("   Child useEffect []");

    return () => {
      console.log("   Child useEffect [CLEANUP] []");
    };
  }, []);

  useEffect(() => {
    console.log("   Child useEffect [input 설정]");

    return () => {
      console.log("   Child useEffect [CLEANUP] [input 설정]");
    };
  }, [input]);

  const handleOnChange = ({ target }) => {
    setInput(target.value);
  };

  return (
    <>
      <input type="text" onChange={handleOnChange} />
      <p>{input}</p>
      {console.log("   Child render end")}
    </>
  );
};

function App() {
  console.log("App render start");
  const [show, setShow] = useState(() => {
    console.log("App lazy loading show");
    return false;
  });

  useEffect(() => {
    console.log("App useEffect 아무것도 설정안함");

    return () => {
      console.log("App useEffect [CLEANUP] 아무것도 설정안함");
    };
  });

  useEffect(() => {
    console.log("App useEffect []");

    return () => {
      console.log("App useEffect [CLEANUP] []");
    };
  }, []);

  useEffect(() => {
    console.log("App useEffect [show 설정]");

    return () => {
      console.log("App useEffect [CLEANUP] [show 설정]");
    };
  }, [show]);

  const handleOnClick = () => {
    setShow((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <button onClick={handleOnClick}>search</button>
      {show ? <Child /> : null}
      {console.log("App render end")}
    </>
  );
}

export default App;
