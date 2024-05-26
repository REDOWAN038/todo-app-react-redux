import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"

const TodoList = () => {
    const filteredTodos = useSelector((state) => {
        const { todos, filter, search } = state.todo

        return todos.filter((todo) => {
            const matchesFilter =
                filter === "ALL" ||
                (filter === "COMPLETED" && todo.completed) ||
                (filter === "INCOMPLETE" && !todo.completed)

            const matchesSearch = todo.text.includes(search)

            return matchesFilter && matchesSearch
        })
    })

    return (
        <ul>
            <li className='my-2 txt-sm italic'>All Your Notes Here...</li>
            {filteredTodos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} />
            ))}
        </ul>
    )
}

export default TodoList
