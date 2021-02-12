import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import useUserId from 'hooks/useUserId';
import { validateEmail } from 'utils';
import { auth, usersCollection, projectsCollection } from '../firebase';
import { login } from '../redux/actions';

import EntrancePage from 'styled/EntrancePage';

function SignUp({ history }) {
   const [errorMsg, setErrorMsg] = useState('');
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const dispatch = useDispatch()
   const userId = useUserId();

   if (userId) {
      history.replace('/today')
   } 

   function signupWithGoogle() {
      alert('coming soon')
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      if (name.length < 3) {
         setErrorMsg('Your name must be at least 3 characters long.');
         return
      } else if (!validateEmail(email)) {
         setErrorMsg('The email address is badly formatted.');
         return
      } else if (password.length < 8) {
         setErrorMsg('Your password must be at least 3 characters long.');
         return
      }

      auth.createUserWithEmailAndPassword(email, password)
         .then(res => {
            const userId = res.user.uid;
            usersCollection.doc(userId).set({
               id: res.user.uid,
               displayName: name,
               email: email
            });

            projectsCollection.doc(userId).set({
               id: userId,
               name: 'Inbox',
               ownerId: userId,
               order: 0,
               view: 'list',
               sortType: 'order',
               sortOrder: 'asc',
               sections: {
                  default: {
                     id: 'default',
                     name: 'default',
                     order: 0,
                     isOpen: true
                  }
               },
               comments: []
            })
         })
         .then(() => {
            auth.signInWithEmailAndPassword(email, password)
               .then((resp) => {
                  usersCollection.doc(resp.user.uid).get().then(doc => {
                     const user = doc.data();
      
                     dispatch(login(user));
                     history.replace('/index');
                  })
               })
            })
         .catch(error => setErrorMsg(error.message));
   }

   return (
      <EntrancePage>
         <h1>Sign up</h1>
         <button onClick={signupWithGoogle}>
            <img
               src="https://d3ptyyxy2at9ui.cloudfront.net/google-41de20.svg"
               alt="Google icon"
            />
            Continue with Google
         </button>
         <span className="separator">OR</span>
         <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your name</label>
            <input
               type="text"
               id="name"
               autoComplete="off"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
               type="text"
               id="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
               type="password"
               id="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            {errorMsg &&
               <span className="error">{errorMsg}</span>
            }
            <button type="submit">
               Sign up with Email
            </button>
         </form>
         <p>Already signed up? <Link to="/login">Go to login</Link></p>
      </EntrancePage>
   )
}

export default SignUp
