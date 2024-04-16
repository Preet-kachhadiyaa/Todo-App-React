import { useState } from "react";

function AppHead({ onNewItem }) {

  const [TodoName, setTodoName] = useState();
  const [TodoDueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  }

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  }

  const handleButtonClick = () => {
    onNewItem(TodoName, TodoDueDate);
    setTodoName("");
    setDueDate("");
  }

  return (
    <div className="item my-5">
      <div className="form-group">
        <div className="row">
          <div className="col-4"><input type="text" className="form-control w-75" placeholder="Enter Todo Here..." value={TodoName} onChange={handleNameChange} /></div>
          <div className="col-4"><input type="date" className="form-control w-75" value={TodoDueDate} onChange={handleDueDateChange} /></div>
          <div className="col-2"><button type="button" className="btn btn-success px-4 add" onClick={handleButtonClick}> + ADD</button></div>
        </div>
      </div>
    </div>
  );
}

export default AppHead;