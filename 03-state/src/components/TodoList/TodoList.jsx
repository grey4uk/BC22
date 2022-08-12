const styles = {
  crossline: {
    textDecorationLine: 'line-through',
  },
};

const TodoList = ({
  todos,
  toggleCheck,
  done,
  total,
  deleteTodo,
}) => {
  return (
    <>
      <h3>{`${done}/${total}`}</h3>
      <ol>
        {todos.map((todo) => {
          const { id, title, text, isDone } = todo;
          return (
            <li key={id} style={{ background: 'grey' }}>
              <h4 style={isDone ? styles.crossline : {}}>
                {title}
              </h4>
              <p style={isDone ? styles.crossline : {}}>
                {text}
              </p>
              <input
                id={id}
                type='checkbox'
                onChange={toggleCheck}
                value={isDone}
              />
              <button
                type='button'
                onClick={() => deleteTodo(id)}>
                DELETE
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default TodoList;
