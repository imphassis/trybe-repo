import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

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
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectTask(value) {
    this.setState({ selectedTask: value });
  }

  removeTodo = () => {
    const { listTodo, selectedTask } = this.state;
    const filtered = listTodo.filter((el) => el !== selectedTask);
    this.setState({ listTodo: [...filtered] });
    this.setState({ selectedTask: '' });
  };

  render() {
    const { listTodo, selectedTask } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        {listTodo && (
          <ul>
            {listTodo.map((todo, index) => (
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
export default App;
