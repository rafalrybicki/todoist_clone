import React from 'react';
import styled from 'styled-components/macro';

import { auth, db } from '../firebase';

import { Link } from 'react-router-dom';

const StyledSignIn = styled.div`
   position: relative;
   width: 100vw;
   height: 100vh;
   background-color: white;
   padding: 10px;
   margin-top: -40px;
   font-size: 13px;
   transition: height .05s;
   overflow-y: auto;

   h1 {
      margin: 8px 0 27px;
      font-size: 26px;
   }

   button {
      height: 38px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: solid 1px #ddd;
      border-radius: 3px;
      margin-bottom: 10px;
      transition: all .2s;

      &[type="submit"] {
         background-color: red;
         color: white;
         font-weight: bold;
         margin: 15px 0;
      }

      &:hover {
         border-color: #202020;
         background-color: #eee;
      }

      img {
         max-height: 16px;
         max-width: 16px;
         margin-right: 8px;
      }
   }

   .separator {
      position: relative;
      z-index: 10;
      display: block;
      width: 40px;
      text-align: center;
      background-color: white;
      margin: 20px auto 10px;
      color: #777777;
   }

   &:after {
      content: '';
      position: absolute;
      top: 174px;
      left: 10px;
      height: 1px;
      width: calc(100% - 20px);
      background-color: #ddd;
   }

   label {
      display: block;
      font-weight: bold;
      margin-bottom: 10px;
      margin-top: 15px;
      
      &.checkbox-label {
         font-weight: normal;
         position: relative;
         top: -1px;
         display: inline-block;
         margin: 0 0 15px 5px;
      }
   }

   input[type="text"], input[type="email"], input[type="password"] {
      width: 100%;
      height: 38px;
      border: solid 1px #ddd;
      border-radius: 3px;
   }

   > p {
      border-top: 1px solid #eee;
      padding-top: 20px;
      text-align: center;

      a {
         color: red;
      }
   }
   
   @media (min-width: 450px) {
      max-width: 452px;
      height: fit-content;
      margin: 0 auto;
      padding: 25px;
      border: solid 1px #dbdbdb;
      border-radius: 8px;

      &:after {
         top: 189px;
         left: 25px;
         width: 402px;
      }
   }
`

function Login({ history }) {
   function signupWithGoogle() {
      alert('coming soon')
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      const { name, email, password } = e.target;

      auth.createUserWithEmailAndPassword(email.value, password.value)
         .then((res) => {
            const path = 'users/' + res.user.uid;
            db.ref(path).set({
               id: res.user.uid,
               name: name.value,
               email: email.value,
            });
         })
         .then(() => history.push('/inbox'))
         .catch((error) => {
            alert(error.message)
         })
   }
   return (
      <StyledSignIn>
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
      </StyledSignIn>
   )
}

export default Login
