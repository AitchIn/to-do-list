import { useState } from "react"

const ToDoForm = ({ onSubmit }) => {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return 

        onSubmit(newItem);

        setNewItem("");
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="new-item-wrapper">
          <label htmlFor="item"><h3>New Item</h3></label>
          <div className="new-item-line">
            <input
              className="new-item-input" 
              value={newItem} 
              onChange={e => setNewItem(e.target.value)}
              type="text"
              id="item"
            />
            <button>Add</button>
          </div>
        </div>
      </form>
    )
}

export default ToDoForm;