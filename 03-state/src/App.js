import { Component } from 'react';

import TodoForm from 'components/TodoForm/TodoForm';
import TodoList from 'components/TodoList/TodoList';

class App extends Component {
  state = { todos: [] };

  createTodo = ({ todo }) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
    }));
  };

  toggleCheck = ({ currentTarget: { id } }) => {
    this.setState((prev) => ({
      todos: prev.todos.map((todo) =>
        todo.id === id
          ? { ...todo, isDone: !todo.isDone }
          : todo
      ),
    }));
  };

  deleteTodo = (id) =>
    this.setState((prev) => ({
      todos: prev.todos.filter((el) => el.id !== id),
    }));

  render() {
    const { todos } = this.state;
    const { createTodo, toggleCheck, deleteTodo } = this;
    const total = todos.length;
    const done = todos.filter((el) => el.isDone).length;

    console.log('render app');
    return (
      <div className='container'>
        {/* <TodoForm prop={false} />
        <TodoForm prop={true} />
        <TodoForm prop={10} /> */}
        <TodoForm createTodo={createTodo} />
        <TodoList
          todos={todos}
          toggleCheck={toggleCheck}
          total={total}
          done={done}
          deleteTodo={deleteTodo}
        />
      </div>
    );
  }
}

export default App;
