import React, { useState } from 'react'
import { Card, CardContent } from '@mui/material';
import { TextField, Button } from '@mui/material';
interface Todo {
  id: number;
  text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <Card>
      <CardContent>{todo.text}</CardContent>
    </Card>
  );
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput('');
  };

  return (
    <div>
      <TextField label="TODOを追加" value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={addTodo}>追加</Button>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const Blog: React.FC = () => {
  return (
    <div>
      <h1>ブログ</h1>
      <TodoList />
    </div>
  );
};

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
  };
}



export default Blog;