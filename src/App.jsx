import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <div className=' border-1 rounded-2xl w-1/3 m-auto text-3xl font-bold bg-gray-900'>React Reducx To Do </div>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
