import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';

import { auth, usersCollection } from '../firebase';
import { login } from '../redux/actions';

import EntrancePage from 'styled/EntrancePage';

function Login({ history }) {
   const dispatch = useDispatch()
   const userId = useSelector(state => state.user.id);

   if (userId) {
      return <Redirect to="/inbox" />
   } 

   function loginWithGoogle() {
      alert('coming soon')
   }

   const handleSubmit = (e) => {
      e.preventDefault();
 
      auth.signInWithEmailAndPassword(e.target.email.value, e.target.password.value)
         .then((resp) => {
            usersCollection.doc(resp.user.uid).get().then(doc => {
               const user = doc.data();

               dispatch(login(user))
            })
         })
         .catch(error => alert(error.message));
   }

   return (
      <EntrancePage>
         <a href="/">
            <img src="https://d3ptyyxy2at9ui.cloudfront.net/logo-e7e40b.svg" alt="Todoist logo"/>
         </a>
         <h1>Log in</h1>
         <button onClick={loginWithGoogle}>
            <img src="https://d3ptyyxy2at9ui.cloudfront.net/google-41de20.svg" alt="Google icon"/>
            Continue with Google
         </button>
         <span className="separator">OR</span>
         <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <button type="submit">
               Log in
            </button>
               <input type="checkbox" id="permanent_login" name="permanent_login" defaultChecked />
               <label htmlFor="permanent_login" className="checkbox-label">Keep me logged in</label>
         </form>
         <p> Don't have an account? <Link to="/signup">Sign up</Link></p>
      </EntrancePage>
   )
}

export default Login
