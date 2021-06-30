import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
      selectedTask: '',
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.selectTask = this.selectTask.bind(this);
  }

  addTodo(todo) {
    this.props.addTodo(todo);
  }

  selectTask(value) {
    this.setState({ selectedTask: value });
  }

  removeTodo = () => {
    const { selectedTask } = this.state;
    const { removeTodo } = this.props;
    removeTodo(selectedTask);
  };

  render() {
    const { list } = this.props;

    const { selectedTask } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(e) => this.addTodo(e)} />
        {list && (
          <ul>
            {list.map((todo, index) => (
              <li key={index + 1} onClick={() => this.selectTask(todo)}>
                <Item content={todo} />
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={this.removeTodo}
          value="Remover"
          data-testid="id-remove"
          disabled={selectedTask ? false : true}
        >
          Remover
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.listReducer.list,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (payload) => dispatch(addTodo(payload)),
  removeTodo: (payload) => dispatch(removeTodo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
