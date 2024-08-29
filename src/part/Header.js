import { Link } from "react-router-dom";
import "../Acetylate the parts/Allstyle.css";
import "../Acetylate the parts/header.css";
import "../Style/The small screen.css";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useContext } from "react";
import ThemeContext from "../datadarkmode";
import { auth } from "../firebase";
import {   signOut  } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { mode, mode1, changeName, changeName1 } = useContext(ThemeContext);
  const [user] = useAuthState(auth);


  const navigate = useNavigate()
  return (
  <>
      <div className={`headertitle ${mode}`}>
        <Link to="/">Attack</Link>
       <div>
         <button
           onClick={() => {
             changeName(mode === "lighet" ? "dark" : "lighet");
             changeName1(mode1 === "lighet" ? "dark1" : "lighet");
           }}
         >
           <i className="fa-solid fa-sun"></i>
           <i className="fa-solid fa-moon"></i>
         </button>
       </div>
     
    
        <div className="headerlink">
          {!user && ( 
            <>
              <Link  to="/Forgetpassword">Forget password</Link>
              <Link  to="/Signup">sign-up</Link>
              <Link  to="/Signin">sign in</Link>
            </>
          )}
          {user && (
            <>
          <Link onClick={() => {
           signOut(auth).then(() => {
            navigate('/')
          }).catch((error) => {
        
          });
          }} to="">sign-out</Link>
              <Link  to="/Mission">mission</Link>
              <Link  to="/About">About</Link>
              
            </>
          )}
        </div>
      </div>
     
  </>
  );
};

export default Header;
