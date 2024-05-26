import { useSelector, useDispatch } from "react-redux"
import { filterTodos, markAllCompleted } from "../features/todo/todoSlice"

const Filter = () => {
    const currentFilter = useSelector((state) => state.todo.filter)
    const dispatch = useDispatch()

    const handleFilter = (filter) => {
        dispatch(filterTodos(filter))
    }

    return (
        <div className='flex space-x-4 items-center'>
            <select
                value={currentFilter}
                onChange={(e) => handleFilter(e.target.value)}
                className='text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none'
            >
                <option value='ALL'>ALL</option>
                <option value='COMPLETED'>COMPLETED</option>
                <option value='INCOMPLETE'>INCOMPLETE</option>
            </select>

            <button
                onClick={() => dispatch(markAllCompleted())}
                className='text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded'
            >
                Mark All Completed
            </button>
        </div>
    )
}

export default Filter
