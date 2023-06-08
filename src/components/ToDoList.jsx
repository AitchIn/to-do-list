import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDos, handleChecked, handleDelete }) => {
    return (
        <ul className="list">
        { toDos.length === 0 && <h4>No To-Dos</h4>}
        {toDos.map(todo => {
          return (
            <ToDoItem {...todo} key={todo.id} handleChecked={handleChecked} handleDelete={handleDelete}/>
            )
        })}
      </ul>
    );
}

export default ToDoList;