import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import useUserId from 'hooks/useUserId';
import { auth, usersCollection } from '../firebase';
import { login } from '../redux/actions';

import EntrancePage from 'styled/EntrancePage';

function Login({ history }) {
   const [errorMsg, setErrorMsg] = useState('');
   const dispatch = useDispatch()
   const userId = useUserId();

   if (userId) {
      history.replace('/today');
      return null
   } 

   function loginWithGoogle() {
      alert('coming soon')
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      setErrorMsg('')
 
      auth.signInWithEmailAndPassword(e.target.email.value, e.target.password.value)
         .then((resp) => {
            usersCollection.doc(resp.user.uid).get().then(doc => {
               const user = doc.data();

               dispatch(login(user));
               history.replace('/today');
            })
         })
         .catch(error => setErrorMsg(error.message));
   }

   return (
      <EntrancePage>
         <h1>Log in</h1>
         <button onClick={loginWithGoogle}>
            <img
               src="https://d3ptyyxy2at9ui.cloudfront.net/google-41de20.svg"
               alt="Google icon"
            />
            Continue with Google
         </button>
         <span className="separator">OR</span>
         <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
               type="text"
               id="email"
               name="email"
            />
            <label htmlFor="password">Password</label>
            <input 
               type="password"
               id="password"
               name="password"
            />
            {errorMsg &&
               <span className="error">{errorMsg}</span>
            }
            <button type="submit">
               Log in
            </button>
         </form>
         <p> Don't have an account? <Link to="/signup">Sign up</Link></p>
      </EntrancePage>
   )
}

export default Login
