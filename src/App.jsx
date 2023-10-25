import { useState } from "react"
import Title from "./components/Title"
import TodosList from "./components/TodosList"


function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      title: "Cleaning rooms", 
      completed: false,
    },
    {
      id: 2,
      title: "Doing Home Work", 
      completed: true,
    }, 
    {
      id: 3,
      title: "Reading Books", 
      completed: false,
    }
  ])

  return (
    <div>
        <Title />
        <TodosList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App