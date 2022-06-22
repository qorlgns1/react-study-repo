import React, { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return (
    <UserInfo.Provider value={{ name: "Licat", id: "ImLion" }}>
      <HelloLicat />
    </UserInfo.Provider>
  );
};

const HelloLicat = () => {
  return (
    <div>
      <h2>hello</h2>
      <strong>hello</strong>
      <HelloLicatTwo />
    </div>
  );
};

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
          <UserInfo.Provider value={{ name: "Licat", id: "ImLion123123123" }}>
            <HelloLicatThree />
          </UserInfo.Provider>
        </div>
      )}
    </UserInfo.Consumer>
  );
};

const HelloLicatThree = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
        </div>
      )}
    </UserInfo.Consumer>
  );
};

export default App;
