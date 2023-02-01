import TodoList from "../components/TodoList";
import { connect } from "react-redux";
import { removeTodo, completeTodo } from "../actions";

const mapStateToProps = (state) => {
    return { todos: [...state]};
}

/* const mapDispatchToProps = (dispatch) => ({ removeTodo }) */

/* const myConnect = connect(mapStateToProps, {removeTodo});
export default myConnect(TodoList); */

export default connect(mapStateToProps, {removeTodo, completeTodo})(TodoList);


/* function func(){
    let x = 10;
    function innnerFunc(txt) {
        let y = 20
        return 'X: ' + x + ' Y: ' + y + ' - ' + txt;
    }
    return innnerFunc
}

let result = func();
result('Ciao'); */