import Main from "../part/Main";
import Footer from "../part/Footer";
import { Helmet } from "react-helmet-async";
import Header from "../part/Header";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../Style/Home.css";
import { auth } from "../firebase";
import { sendEmailVerification } from "firebase/auth";
import { useState } from "react";
function Home() {
  const navigate = useNavigate();
  const [send, setsend] = useState(true);
  const [user, loading, error] = useAuthState(auth);

  if (user) {
    if (!user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>Home</title>
          </Helmet>
          <Header />
          <Main>
            <h2>
              <span>Please confirm the account &#129505;</span>
              <div className="dadinput">
                {send && (
                  <>
                    <button
                      onClick={() => {
                        sendEmailVerification(auth.currentUser).then(() => {setsend(false)});
                      }}
                    >
                      send Email
                    </button>
                  </>
                )}
              </div>
            </h2>
          </Main>
          <Footer />
        </>
      );
    }
    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>Home</title>
          </Helmet>
          <Header />
          <Main>
            <h2>
              <span>walcome {user.displayName} &#129505;</span>
            </h2>
          </Main>
          <Footer />
        </>
      );
    }
  }
  if (!user) {
    return (
      <>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Header />
        <Main>
          <h2>
            <span>Please log in &#129505;</span>
          </h2>
        </Main>
        <Footer />
      </>
    );
  }
}

export default Home;
