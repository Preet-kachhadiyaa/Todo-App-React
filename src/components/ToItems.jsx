import TodoItem from "./TodoItem";

const ToItems = ({ todoItem, onDeleteClick }) => {
  return (
    <div className="item">
      {todoItem.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default ToItems;
