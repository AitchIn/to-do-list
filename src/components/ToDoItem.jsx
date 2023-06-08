const ToDoItem = ({ completed, id, title, handleChecked, handleDelete }) => {
    return (
        <li>
            <label className="list-label">
            <input type="checkbox"
            checked={completed}
            onChange={e => handleChecked(id, e.target.checked)}
            ></input>
            <span className="list-span">{title}</span>
            <button 
            onClick={() => handleDelete(id)}
            >Delete</button>
            </label>
        </li>
    )
}

export default ToDoItem;