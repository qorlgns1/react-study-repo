import { databaseService } from "firebaseSetup";
import React, { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";

const Home = () => {
  const [nweet, setNweet] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const docRef = await addDoc(collection(databaseService, "nweets"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    const querySnapshot = await getDocs(collection(databaseService, "nweets"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`, doc.data());
    });
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
    </div>
  );
};
export default Home;
