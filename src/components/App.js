import './App.css';
import Todo from './Todo';
import Count from './Count';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      todos: [],
    };
  }

  render() {
    const doneCount = this.state.todos.filter((todo) => todo.done).length;
    return (
      <div id="container">
        <h1>To Do</h1>
        <div>
          <Count allLenght={this.state.todos.length} doneLenght={doneCount} />
          <input
            value={this.state.name}
            onChange={this.handleSetNane}
            id="todoInputName"
          />
          <button onClick={this.handleAddTodo} id="addButton">
            Add to do
          </button>
        </div>
        {this.state.todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            done={todo.done}
            onDone={this.handleSetDone}
            onDeleteItem={this.handleDeleteTodo}
          />
        ))}
      </div>
    );
  }

  handleSetNane = (e) => {
    this.setState({ name: e.target.value });
  };

  handleAddTodo = () => {
    if (!this.state.name.trim()) {
      alert('You cannot create a todo with an empty name.');
      this.setState({
        name: '',
      });
    } else {
      const todo = {
        name: this.state.name,
        done: false,
        id: Date.now() + Math.random().toString(36).substring(2),
      };

      this.setState({
        name: '',
        todos: this.state.todos.concat([todo]),
      });
    }
  };

  handleSetDone = (done, id) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, done } : todo
      ),
    });
  };

  handleDeleteTodo = (id) => {
    const idx = this.state.todos.findIndex((todo) => todo.id === id);
    const newTodos = [
      ...this.state.todos.slice(0, idx),
      ...this.state.todos.slice(idx + 1),
    ];
    this.setState({
      todos: newTodos,
    });
  };
}

export default App;
