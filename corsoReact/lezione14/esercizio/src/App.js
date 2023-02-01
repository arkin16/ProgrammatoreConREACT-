import './App.css';

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

async function getAllUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/')

  users = await response.json();
  console.log(users);
}
getAllUsers();

let objinfo = {name: '---'};

function getUser(obj) {
  objinfo = obj;
  console.log(objinfo);
}

function removeUser(obj) {
  users = users.filter(ele => ele.id !== obj.id)
  console.log(users);
}

function App() {
  
  return (
    <div className="container">
      <div className="row g-3 my-3" id="myForm">
        <div className="col-sm">
          <input type="text" name="name" className="form-control" placeholder="Fullname..." />
        </div>
        <div className="col-sm">
          <input type="text" name="username" className="form-control" placeholder="Username..." />
        </div>
        <div className="col-sm">
          <input type="text" name="city" className="form-control" placeholder="City..." />
        </div>
        <div className="col-sm">
          <input type="tel" name="phone" className="form-control" placeholder="Phone..." />
        </div>
        <div className="col-sm">
          <input type="email" name="email" className="form-control" placeholder="Email..." />
        </div>
        <div className="col-sm">
          <button type="button" className="btn btn-dark form-control">Add</button>
        </div>
      </div>
      <div className="row g-3 my-3" id="myPage">
            <div className="col-sm card" id="myTable">
                <table className="table table-striped table-hover">
                    <thead>
                      <tr className="table-info">
                        <th scope="col">#</th>
                        <th scope="col">Fullname</th>
                        <th scope="col">Username</th>
                        <th scope="col">City</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                    {users.map((ele, i) => (
                      <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{ele.name}</td>
                        <td>{ele.username}</td>
                        <td>{ele.address.city}</td>
                        <td>
                            <button type="button" className="btn btn-outline-warning btn-sm" onClick={() => getUser(ele)}><i className="bi bi-info-square"></i></button>
                            <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => removeUser(ele)}><i className="bi bi-trash-fill"></i></button>
                        </td>
                      </tr>
                    ))}

                    </tbody>
                  </table>
            </div>
            <div className="col-sm">
                <div className="card" id="cardDetail">
                    <div className="card-header">
                      Detail Contact
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">{objinfo.name}</h3>
                      <p className="card-text">City: London</p>
                      <p className="card-text">Phone: +39 123.456789</p>
                      <p className="card-text">Email: mark.otto@example.com</p>
                    </div>
                </div>
            </div>         
          </div>
    </div>
  );
}


export default App;
