


function TableComponent(props) {
  console.log(props);
    return (
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

                      {props.users.map((ele, i) => (
                        <tr key={i}>
                          <th scope="row">{i+1}</th>
                          <td>{ele.name}</td>
                          <td>{ele.username}</td>
                          <td>{ele.address.city}</td>
                          <td>
                              <button type="button" className="btn btn-outline-warning btn-sm">
                                <i className="bi bi-info-square"></i>
                              </button>
                              <button type="button" className="btn btn-outline-danger btn-sm">
                                <i className="bi bi-trash-fill"></i>
                              </button>
                          </td>
                        </tr>
                      ))}
                      
                    </tbody>
                  </table>
            </div>
    )
}

export default TableComponent;