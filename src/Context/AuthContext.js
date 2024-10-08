import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
function Auth({ children }) {
  const [Auth, setAuth] = useState(true);
  const[xToken, setXtoken] = useState(null)
  const[rToken, setRtoken] = useState(null)
  const [history, setHistory] = useState("");
  useEffect(() => {
    const xtoken = localStorage.getItem("xToken");
    const rtoken = localStorage.getItem("rToken");
    setXtoken(xtoken||'');
    setXtoken(rtoken||'');
  }, [xToken, rToken]);
  let location = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    if (history === "") {
      setHistory(location.pathname);
    }
  }, [history, location.pathname]);

  useEffect(() => {
    if(xToken){
      if(history==='/sign-in'||history==='/confirm-otp'){
        navigate('/dashboard')
      }else{
        navigate(`${history}`)
      }
    }else{
      navigate("/sign-in");
    }
   
  }, [xToken, history, navigate]);

  return (
    <AuthContext.Provider value={{ history, setXtoken, xToken, rToken, setRtoken }}>
      {children}
    </AuthContext.Provider>
  );
}
export default Auth;
