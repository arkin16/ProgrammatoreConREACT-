import { connect } from "react-redux";
import AddTodoForm from "../components/AddTodoForm";
import { addTodo } from "../actions"

export default connect(null, {addTodo})(AddTodoForm);