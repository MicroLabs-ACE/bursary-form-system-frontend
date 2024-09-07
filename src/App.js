import './App.scss';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
      <h2>This is the home page</h2>
      <Link to='/sign-up'>Click to go to the sign up page</Link>
    </div>  
  );
}

export default App;
