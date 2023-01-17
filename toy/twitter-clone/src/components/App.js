import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "firebaseSetup";
import { signOut } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      {isLoggedIn && (
        <button onClick={() => signOut(authService)}>로그아웃</button>
      )}
    </>
  );
}

export default App;
