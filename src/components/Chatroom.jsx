import React, { useState } from "react";
import {
  query,
  collection,
  addDoc,
  orderBy,
  limit,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

const Chatroom = () => {
  const [formValue, setFormValue] = useState("");

  const q = collection(db, "messages");
  const messagesRef = query(q, orderBy("createdAt"), limit(25));

  onSnapshot(messagesRef, snapshot => {
    let messages = [];
    snapshot.docs.forEach(doc => {
      messages.push({ ...doc.data(), id: doc.id });
    });
    console.log(messages);
    return messages;
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValue);
    const sendToFirestore = addDoc(collection(db, "messages"), {
      text: formValue,
      createdAt: serverTimestamp(),
    });
    return sendToFirestore;
  };

  return (
    <section id="chatroom">
      <h2 className="chatroom__header">Chat Room</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formValue}
          onChange={e => setFormValue(e.target.value)}
        />
        <input type="submit" value="send" />
      </form>
      {/* {messages &&
        messages.map(message => {
          return `<p>${message}</p>`;
        })} */}
    </section>
  );
};

export default Chatroom;
