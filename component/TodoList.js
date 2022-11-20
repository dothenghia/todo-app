import html from "../core.js";

import { connect } from "../store.js"

import TodoItem from "./TodoItem.js";

function TodoList({ todos, filter, filters, editIndex }) {
    return html`
    <section class="main">
        <input
            id="toggle-all"
            class="toggle-all"
            type="checkbox"
            onchange="dispatch('toggleAll', this.checked)"
            ${todos.every(filters.completed) && 'checked'}
        >
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            ${todos.filter(filters[filter])
                .map((todo, index)=>{
                // return TodoItem({todo : todo}) Hoac co the ap dung Enhanced Object Literal
                return TodoItem({ todo, index , editIndex})
            })}
        </ul>
    </section>
    `
}

// let connector = connect()
// export default connector(TodoList)
export default connect()(TodoList)