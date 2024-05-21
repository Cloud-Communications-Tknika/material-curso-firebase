import React from 'react';
import './styles/App.css';
import "./styles/styles.css";

import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

import { useAuthState } from 'react-firebase-hooks/auth';



import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';
import SignOut from './components/SignOutNavBar';


const firebaseApp = initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
})

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);



function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut auth = {auth}/>
      </header>

      <section>
        {user ? <ChatRoom auth = {auth} firestore = {db}/> : <SignIn auth = {auth}/>}
      </section>

    </div>
  );
}

export default App;
