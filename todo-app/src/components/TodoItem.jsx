import { useDispatch } from "react-redux"
import { FaTrash, FaCheck, FaTimes, FaEdit } from "react-icons/fa"

import {
    markComplete,
    markIncomplete,
    removeTodo,
    updateTodo,
} from "../features/todo/todoSlice"
import { useState } from "react"
import Modal from "./Modal"

const TodoItem = ({ todo, index }) => {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    const handleConfirm = (newText) => {
        dispatch(updateTodo({ index, newText }))
    }

    return (
        <li className='flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4'>
            <div className='flex items-center'>
                <span className='mr-4 text-gray-500'>{index + 1}.</span>
                <span
                    className={`mr-4 ${
                        todo.completed ? "line-through text-gray-500" : ""
                    }`}
                >
                    {todo.text}
                </span>
            </div>
            <div className='space-x-3 ml-8'>
                <button
                    className='mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded'
                    onClick={() => setShowModal(true)}
                >
                    <FaEdit />
                </button>
                <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    handleConfirm={handleConfirm}
                    text={todo.text}
                />
                <button
                    className='mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded'
                    onClick={() => dispatch(removeTodo(index))}
                >
                    <FaTrash />
                </button>
                {!todo.completed && (
                    <button
                        className='text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded'
                        onClick={() => dispatch(markComplete(index))}
                    >
                        <FaCheck />
                    </button>
                )}
                {todo.completed && (
                    <button
                        className='text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded'
                        onClick={() => dispatch(markIncomplete(index))}
                    >
                        <FaTimes />
                    </button>
                )}
            </div>
        </li>
    )
}

export default TodoItem
