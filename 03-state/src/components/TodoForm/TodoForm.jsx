import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  title: '',
  text: '',
  isDone: false,
  // count: 0,
};

class TodoForm extends Component {
  //   constructor(props) {
  //     super();

  //     this.state = { defaultProp: props.prop };
  //   }
  //   static defaultProps = { prop: 12 };

  state = {
    ...initialState,
  };

  handleInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
    //     this.state.title=value;
  };

  handleSubmit = (e) => {
    //     for (let i = 1; i <= 3; i++) {
    //       this.setState((prev) => {
    //         console.log('prev', prev);
    //         return { count: this.state.count + i };
    //       });
    //       console.log('this.state.count', this.state.count);
    //     }

    e.preventDefault();
    const todo = { ...this.state, id: uuidv4() };
    this.props.createTodo({ todo });
    this.reset();
  };

  reset = () => {
    this.setState(initialState);
  };

  render() {
    //     return <form>{this.state.defaultProp}</form>;
    const { text, title } = this.state;
    const { handleInput, handleSubmit } = this;
    console.log('render form');
    return (
      <form
        className='flexCenter'
        style={{ gap: '30px' }}
        onSubmit={handleSubmit}>
        <label>
          Create your task title
          <input
            name='title'
            type='text'
            onChange={handleInput}
            value={title}
          />
        </label>
        <label>
          Create your task
          <input
            name='text'
            type='text'
            onChange={handleInput}
            value={text}
          />
          {/* <TodoCheck handleInput={handleInput.bind(this)}/> */}
        </label>
        <button type='submit'>Add todo</button>
      </form>
    );
  }
}

export default TodoForm;
