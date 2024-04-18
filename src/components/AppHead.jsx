import { useRef } from "react";
import { MdOutlineAddCircle } from "react-icons/md";

function AppHead({ onNewItem }) {
  const todoNameElement = useRef();
  const DueDateElement = useRef();

  const handleButtonClick = (event) => {
    event.preventDefault();
    const TodoName = todoNameElement.current.value;
    const TodoDueDate = DueDateElement.current.value;

    todoNameElement.current.value = "";
    DueDateElement.current.value = "";

    onNewItem(TodoName, TodoDueDate);
  };

  return (
    <form className="item my-5" onSubmit={handleButtonClick}>
      <div className="form-group">
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              ref={todoNameElement}
              className="form-control w-75"
              placeholder="Enter Todo Here..."
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              ref={DueDateElement}
              className="form-control w-75"
            />
          </div>
          <div className="col-2">
            <button
              type="submit"
              className="btn btn-success px-4 add"
            >
              <MdOutlineAddCircle />

            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AppHead;
