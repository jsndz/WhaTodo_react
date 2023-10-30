import { Component } from "react";
class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
  }
  state = {};
  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addTodo(this.state.todo);
        }}
      >
        <div className="mb-3">
          <label  className="form-label"  htmlFor="todoInput">
            Your Todo
          </label>
          <input
            type="text"
            className="form-control"
            id="todoList"
            aria-describedby="emailHelp"
            placeholder="todo..."
            onChange={(e) => {
              this.setState({
                todo: e.currentTarget.value,
              });
            }}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="reset" className="btn btn-secondary">
          Start Over
        </button>
      </form>
    );
  }
}

export default TodoForm;
