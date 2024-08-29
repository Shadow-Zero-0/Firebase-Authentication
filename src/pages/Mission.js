
import Main from "../part/Main";
import Footer from "../part/Footer";
import Header from '../part/Header';
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useEffect } from "react";


const Mission = () => {
  const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if(!user){
      navigate('/')
    } 
    if(user){
      if(!user.emailVerified){
        navigate('/')
      }
     } 
  }, []);


  return (
    <>
    <Helmet>
    <title>mission</title>
    </Helmet>
<Header/>
    <Main >
      <h1>mission</h1>
    </Main>
    <Footer/>
</>
  );
}

export default Mission;
