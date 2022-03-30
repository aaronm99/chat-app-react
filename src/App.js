import Nav from "./components/Nav";
import { authentication } from "./firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Chatroom from "./components/Chatroom";

function App() {
  const auth = getAuth();

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [auth]);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSignOut = () => {
    if (currentUser) {
      signOut(auth);
    }
  };

  return (
    <div className="App">
      <Nav
        clickEvent={signInWithGoogle}
        currentUser={currentUser}
        handleSignOut={handleSignOut}
      />
      <Header />
      <Stats />
      <Chatroom />
    </div>
  );
}

export default App;
