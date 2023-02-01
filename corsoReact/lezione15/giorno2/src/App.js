import './App.css';
import AddFormComponent from './components/AddFormComponent';
import MainComponent from './components/MainComponent';

let users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      city: "Gwenborough",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  },
  {
    id: 2,
    name: "Mario Rossi Graham",
    username: "mariorossi",
    email: "mr@april.biz",
    address: {
      city: "London",
    },
    phone: "1-770-736-8031",
    website: "mariorossi.org"
  }
]

function App() {
  return (
    <div className="container">
      <h1 className="test">Mia App React</h1>
      <AddFormComponent txt="Mia Props" />
      <MainComponent userlist={users} txt="Mia Props" />
    </div>
  );
}

export default App;
