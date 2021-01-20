import React from 'react';

import { auth } from '../firebase';
import { Redirect } from 'react-router-dom';
import EntranceView from './EntranceView';
import { Link } from 'react-router-dom';

function Login({ history }) {
   if (auth.currentUser && auth.currentUser.uid) {
      return <Redirect to="/index" />
   }

   function loginWithGoogle() {
      alert('coming soon')
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      auth.signInWithEmailAndPassword(e.target.email.value, e.target.password.value)
         .then(() => history.push("/index"))
         .catch(error => alert(error.message));
   }

   return (
      <EntranceView>
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
      </EntranceView>
   )
}

export default Login
