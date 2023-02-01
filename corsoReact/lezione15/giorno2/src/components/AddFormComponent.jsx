import React from "react";
/* function AddFormComponent() {
    return (
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
    )
} */

class AddFormComponent extends React.Component {
    render() {
        /* console.log(this.props.txt); */
        return (
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
        )
    }
}

export default AddFormComponent;