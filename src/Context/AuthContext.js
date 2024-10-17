import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AuthContext = createContext();
export const Auth =({children})=>{
const location = useLocation()
  const [token, setToken] = useState({x: localStorage.getItem("xToken")||null, r: localStorage.getItem("rToken")||null})
  const signin =(userToken)=>{
    setToken(userToken)
    
  }
  const logout = () => {
    setToken({x:null, r:null});
    localStorage.setItem('xToken', null)
    localStorage.setItem('rToken', null)

  };
  const isAuthenticated = !!token.x;
  const [history, setHistory] = useState("");
  useEffect(() => {
    if (history === "") {
      setHistory(location.pathname);
    }
  }, [history, location.pathname]);
  return (
    <AuthContext.Provider
    value={{ isAuthenticated, signin, logout, history }}
  >
    {children}
  </AuthContext.Provider>
  )
}
export const useAuth =()=>{
  const context = useContext(AuthContext)
  return context
}
// function Auth({ children }) {
//   const [xToken, setXtoken] = useState(null);
//   const [rToken, setRtoken] = useState(null);
//   const [history, setHistory] = useState("");
//   useEffect(() => {
//     const xtoken = localStorage.getItem("xToken");
//     const rtoken = localStorage.getItem("rToken");
//     setXtoken(xtoken || "");
//     setXtoken(rtoken || "");
//   }, [xToken, rToken]);
//   let location = useLocation();

//   const navigate = useNavigate();
//   useEffect(() => {
//     if (history === "") {
//       setHistory(location.pathname);
//     }
//   }, [history, location.pathname]);

//   useEffect(() => {
//     if (xToken) {
//       if (history === "/sign-in" || history === "/confirm-otp") {
//         navigate("/dashboard");
//       } else {
//         navigate(`${history}`);
//       }
//     } else if (!xToken && location.pathname !== "/confirm-otp") {
//       navigate("/sign-in");
//     }
//   }, [xToken, history, navigate, location.pathname]);

//   return (
//     <AuthContext.Provider
//       value={{ history, setXtoken, xToken, rToken, setRtoken }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }
// export default Auth;
