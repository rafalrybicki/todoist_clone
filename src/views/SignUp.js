import React from 'react';

import { auth, db } from '../firebase';
import { Redirect } from 'react-router-dom';
import EntranceView from './EntranceView';
import { Link } from 'react-router-dom';

function SignUp({ history }) {
   if (auth.currentUser && auth.currentUser.uid) {
      return <Redirect to="/index" />
   }

   function signupWithGoogle() {
      alert('coming soon')
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      const { name, email, password } = e.target;

      auth.createUserWithEmailAndPassword(email.value, password.value)
         .then(res => {
            const userId = res.user.uid;
            db.collection('users').doc(userId).set({
               id: res.user.uid,
               displayName: name.value,
               email: email.value
            });

            db.collection('projects').doc(userId).set({
               id: userId,
               name: 'Inbox',
               ownerId: userId,
               order: 0,
               view: 'list',
               sortType: 'order',
               sortDirection: 'down',
               sections: {},
               comments: []
            })
         })
         .then(() => history.push("/index"))
         .catch(error => alert(error.message))
   }

   return (
      <EntranceView>
         <a href="/">
            <img src="https://d3ptyyxy2at9ui.cloudfront.net/logo-e7e40b.svg" alt="Todoist logo"/>
         </a>
         <h1>Sign up</h1>
         <button onClick={signupWithGoogle}>
            <img src="https://d3ptyyxy2at9ui.cloudfront.net/google-41de20.svg" alt="Google icon"/>
            Continue with Google
         </button>
         <span className="separator">OR</span>
         <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" autoComplete="off" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <p>Your password must be at least 8 characters long. Avoid common words or patterns.</p>
            <button type="submit">
               Sign up with Email
            </button>
            <input type="checkbox" id="permanent_login" name="permanent_login" defaultChecked />
            <label htmlFor="permanent_login" className="checkbox-label">Keep me logged in</label>
         </form>
         <p>Already signed up? <Link to="/login">Go to login</Link></p>
      </EntranceView>
   )
}

export default SignUp
