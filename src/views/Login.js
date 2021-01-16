import React from 'react';
import styled from 'styled-components/macro';

import { Link } from 'react-router-dom';

const StyledLogin = styled.div`
   position: relative;
   width: 100vw;
   height: 100vh;
   background-color: white;
   padding: 10px;
   margin-top: -40px;
   font-size: 13px;
   transition: height .05s;

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
      margin: 20px auto;
      color: #777777;
   }

   &:after {
      content: '';
      position: absolute;
      top: 270px;
      left: 10px;
      height: 1px;
      width: calc(100% - 20px);
      background-color: #ddd;
   }

   label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
      
      &.checkbox-label {
         font-weight: normal;
         position: relative;
         top: -1px;
         display: inline-block;
         margin-top: 10px;
         margin-left: 5px;
      }
   }

   input[type="email"], input[type="password"] {
      width: 100%;
      height: 38px;
      border: solid 1px #ddd;
      border-radius: 3px;
      margin-bottom: 15px;
   }

   p {
      text-align: center;
      margin: 20px;

      a {
         color: red;
      }
   }
   
   @media (min-width: 450px) {
      max-width: 452px;
      height: ${props => props.type === 'login' ? '610px' : '500px'};
      margin: 0 auto;
      padding: 25px;
      border: solid 1px #dbdbdb;
      border-radius: 8px;

      &:after {
         top: 284px;
         left: 25px;
         width: 402px;
      }
   }
`

function Login({ type }) {
   return (
      <StyledLogin type={type}>
         <a href="/">
            <img src="https://d3ptyyxy2at9ui.cloudfront.net/logo-e7e40b.svg" alt="Todoist logo"/>
         </a>
         <h1>{type === 'login' ? 'Log in' : 'Sign up'}</h1>
         <button>
            <img src="https://d3ptyyxy2at9ui.cloudfront.net/google-41de20.svg" alt="Google icon"/>
            Continue with Google
         </button>
         <button>
            <img src="https://d3ptyyxy2at9ui.cloudfront.net/facebook-fadd25.svg" alt="Facebook icon"/>
            Continue with Facebook
            </button>
         <button>
            <img src="https://d3ptyyxy2at9ui.cloudfront.net/apple-728ddf.svg" alt="Apple icon"/>
            Continue with Apple
         </button>
         <span className="separator">OR</span>
         <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            {type === 'login' && <>
               <label htmlFor="password">Password</label>
               <input type="password" id="password" name="password" />
            </>}
            <button type="submit">
               {type === 'login' ? 'Log in' : 'Sign with Email'}
            </button>

            {type === 'login' && <>
               <input type="checkbox" defaultChecked />
               <label htmlFor="permanent_login" className="checkbox-label">Keep me logged in</label>
            </>}
         </form>
         {type === 'login' &&
            <p> Don't have an account? <Link to="/signup">Sign up</Link></p>
         }
         {type === 'signup' &&
            <p> Don't have an account? <Link to="/login">Go to login</Link></p>
         }
      </StyledLogin>
   )
}

export default Login
