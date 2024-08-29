import Main from "../part/Main";
import Footer from "../part/Footer";
import Header from "../part/Header";
import "../Style/signup and singin.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Atom } from "react-loading-indicators";
const SignIn = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [massge, setmassge] = useState("");
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {

    if (user) {
      if (user.emailVerified) {
        navigate("/");
      }
    }
  }, );
  if (loading) {
    return (
      <>
        <Helmet>
          <title>About</title>
        </Helmet>
        <Header />
        <Main>
          <Atom color="#1b6a1b" size="large" text="" textColor="#000000" />
        </Main>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Helmet>
        <title>SignIn</title>
      </Helmet>
      <Header />
      <Main>
        <h3>
          <span>{massge}</span>
        </h3>
        <div className="dadinput">
          <input required
            onChange={(eo) => {
              setemail(eo.target.value);
            }}
            type="gmail"
            placeholder="Email :-"
          />
          <input required
            onChange={(eo) => {
              setpassword(eo.target.value);
            }}
            type="password"
            placeholder="password :-"
          />
          <button
            onClick={() => {
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  navigate("/");
                
                  // ...
                })
                .catch((error) => {
                  setmassge(`Please verify your email and password`);
                });
            }}
          >
            Sign-In
          </button>
          <h3>
            Create a new account <Link to="/Signup">sign-up</Link>
          </h3>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default SignIn;
