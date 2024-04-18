import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-4">
          <p className="items">{todoName}</p>
        </div>
        <div className="col-4">
          <p className="items">{todoDate}</p>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger px-4"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
