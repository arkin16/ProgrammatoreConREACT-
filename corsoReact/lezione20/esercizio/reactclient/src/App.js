import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Userstable from './components/Userstable';

function App() {
  return (
    <>
      <Userstable />
      <Signup />
      <Signin />
    </>
  );
}

export default App;
