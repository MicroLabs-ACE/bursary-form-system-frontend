import './App.scss';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
      Front page
      <Link to='/sign-up'>This is the link</Link>
    </div>  
  );
}

export default App;
