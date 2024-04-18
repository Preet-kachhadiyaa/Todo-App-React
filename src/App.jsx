import Appname from "./components/Appname";
import AppHead from "./components/AppHead";
import ToItems from "./components/ToItems";
import WelcomeMsg from "./components/Welcomemsg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItem, setTodoItems] = useState([]);

  const handleNewItems = (itemName, itemDueDate) => {
    setTodoItems ((currVal) =>[
    ...currVal, 
    { name: itemName, dueDate: itemDueDate },
  ]);   
  };

  const handleDeleteItems = (todoName) => {
    const newItems = todoItem.filter((item) => item.name !== todoName);
    setTodoItems(newItems);
  };

  return (
    <center className="todo my-5">
      <Appname></Appname>
      <AppHead onNewItem={handleNewItems}></AppHead>
      {todoItem.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <ToItems todoItem={todoItem} onDeleteClick={handleDeleteItems}></ToItems>
    </center>
  );
}

export default App;
