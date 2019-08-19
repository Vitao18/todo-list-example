import React, { useState } from "react";

import "./App.css";

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  return (
    <div className="list-container">
      <form
        onSubmit={event => {
          event.preventDefault();
          if (!!value) {
            setTodos([...todos, value]);
            setValue("");
          }
          return;
        }}
      >
        <input
          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <button type="submit">adicionar</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
