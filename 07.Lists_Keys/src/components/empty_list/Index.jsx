function TodoList({ todos }) {
  if (todos.length === 0) {
    return <p>No tasks yet ✅</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}


export default TodoList;