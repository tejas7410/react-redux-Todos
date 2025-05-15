import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/todo/TodoSlice'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className="mt-12 space-x-3">
            <input
                type="text"
                className="focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="focus:outline-none hover:bg-indigo-600 px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo