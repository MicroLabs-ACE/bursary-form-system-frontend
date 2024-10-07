import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./App.css";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="1060279721136-viaj4ueh8tqeuo87v5doc6tcevj5dpu9.apps.googleusercontent.com">
      <div className="container">
        <h1>Google Sign-In</h1>
        <GoogleLogin
          onSuccess={(response) => console.log("Success:", response)}
          onError={() => console.log("Error")}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
