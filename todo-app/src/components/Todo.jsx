import { useState } from "react"
import { BsPlus, BsSearch } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { addTodo, searchTodos } from "../features/todo/todoSlice"
import Filter from "./Filter"
import TodoList from "./TodoList"

const Todo = () => {
    const [newTodo, setNewTodo] = useState("")
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            dispatch(addTodo(newTodo.trim()))
            setNewTodo("")
        }
    }

    const handleSearchTodo = (value) => {
        setSearch(value)
        dispatch(searchTodos(search))
    }

    return (
        <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
            <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>
                personal todo app
            </h2>

            {/* add todo section */}

            <div className='flex items-center mb-4'>
                <input
                    type='text'
                    placeholder='Add Todo'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'
                />
                <button
                    className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'
                    onClick={handleAddTodo}
                >
                    <BsPlus />
                </button>
            </div>

            {/* filter and search */}

            <div className='flex items-center justify-between'>
                <Filter />
                <div className='flex items-center mb-4'>
                    <input
                        type='text'
                        placeholder='Search Todo'
                        value={search}
                        onChange={(e) => handleSearchTodo(e.target.value)}
                        className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'
                    />
                    <button className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'>
                        <BsSearch />
                    </button>
                </div>
            </div>

            {/* todo list */}

            <TodoList />
        </div>
    )
}

export default Todo
