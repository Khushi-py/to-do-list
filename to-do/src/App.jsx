import { useState } from 'react'
import './App.css'
import LaunchPage from './components/LaunchPage'

function App() {
  let [todoList, setToDoList] = useState([]);
  const [launched, setLaunched] = useState(false)

  let saveToDoList = (e) => {
    e.preventDefault();
    let item = e.target.item.value.trim();

    if (item === "") return;

    if (!todoList.some(todo => todo.text === item)) {
      let finalTodoList = [...todoList, { text: item, done: false }];
      setToDoList(finalTodoList);
    } else {
      alert("Item already present");
    }
    e.target.item.value = "";
  };

  let list = todoList.map((todo, index) => (
    <TodoListItem
      key={index}
      todo={todo}
      indexNum={index}
      todoList={todoList}
      setToDoList={setToDoList}
    />
  ));

  if (!launched) {
    return <LaunchPage onContinue={() => setLaunched(true)} />
  }

  return (
    <div className="App">
      <div className="todo-wrapper">
        <h1>To-Do List</h1>
        <form onSubmit={saveToDoList}>
          <input type="text" name="item" placeholder="Enter a task..." />
          <button type="submit">Add</button>
        </form>
        <div className="showList">
          <ul>{list}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;

function TodoListItem({ todo, indexNum, todoList, setToDoList }) {
  let [isEditing, setIsEditing] = useState(false);
  let [editValue, setEditValue] = useState(todo.text);

  // Delete task
  let deleteRow = () => {
    let newList = todoList.filter((_, ind) => ind !== indexNum);
    setToDoList(newList);
  };

  // Mark as done
  let markAsDone = () => {
    let newList = [...todoList];
    newList[indexNum].done = true;   // mark task done
    setToDoList(newList);
  };

  // Save edit
  let saveEdit = () => {
    let newList = [...todoList];
    newList[indexNum].text = editValue;
    setToDoList(newList);
    setIsEditing(false);
  };

  return (
    <li className={todo.done ? "done" : ""}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span className="text">{todo.text}</span>
          <div className="actions">
            {!todo.done && <button onClick={markAsDone}>✅ Done</button>}
            {/* Hide Edit button if task is done */}
            {!todo.done && <button onClick={() => setIsEditing(true)}>✏️ Edit</button>}
            <button onClick={deleteRow}>❌ Delete</button>
          </div>
        </>
      )}
    </li>
  );
}
