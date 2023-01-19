import React, { useState } from "react";
import { authService } from "firebaseSetup";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;

      if (newAccount) {
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      console.log("signup data", data);
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);

  const handleSocialLogin = async (e) => {
    let provider;
    let result;
    let credential;
    const {
      target: { name },
    } = e;
    if (name === "google") {
      provider = new GoogleAuthProvider();
      result = await signInWithPopup(authService, provider);
      credential = GoogleAuthProvider.credentialFromResult(result);
    } else {
      provider = new GithubAuthProvider();
      result = await signInWithPopup(authService, provider);
      credential = GithubAuthProvider.credentialFromResult(result);
    }

    console.log("result", result);
    // The signed-in user info.
    const user = result.user;
    console.log("user", user);

    console.log("credential", credential);
    const token = credential.accessToken;

    console.log("token", token);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Sign In"}
        />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </span>
      <div>
        <button name="google" onClick={handleSocialLogin}>
          Continue with Google
        </button>
        <button name="github" onClick={handleSocialLogin}>
          Continue with Github
        </button>
      </div>
    </div>
  );
};
export default Auth;
