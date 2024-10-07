import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/Auth/SignIn";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
