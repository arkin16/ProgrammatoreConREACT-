import CardComponent from "./CardComponent";
import TableComponent from "./TableComponent";



function MainComponent(props) {
    console.log(props);
    return (
        <div className="row g-3 my-3" id="myPage">
            <TableComponent users={props.userlist} />
            <CardComponent /> 
        </div>
    )
}


export default MainComponent;

