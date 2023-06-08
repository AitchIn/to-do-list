import { useEffect, useState } from "react"
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import InstallPWA from "./components/InstallPWA";

function App() {
  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(toDos))
  }, [toDos])

  function addToDo(title) {
    setToDos(currenttoDos => {
      return [
        ...currenttoDos,
        { id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }

  function handleChecked(id, completed) {
    setToDos( currenttoDos => {
      return currenttoDos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }

        return todo;
      })
    })
  }

  function handleDelete(id) {
    setToDos( currenttoDos => {
      return currenttoDos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    <InstallPWA />
    <div className="wrapper">
      <ToDoForm onSubmit={addToDo} />
      <h3>To-Do List</h3>
      <ToDoList toDos={toDos} handleChecked={handleChecked} handleDelete={handleDelete}/>
    </div>
    </>
  )
}

export default App