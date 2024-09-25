import React, { FC } from 'react'

// interface ITodoListItem{
//     todo:ITodoType;
//     toggleTodo:ToggleFn;
//     deleteTodo:DeleteFn
// }

interface ITodoListItem extends ITodoListFn{
    todo:ITodoType;
}

const TodoListItem:FC<ITodoListItem> = ({todo, toggleTodo, deleteTodo}) => {
  return (
    <div>TodoListItem</div>
  )
}

export default TodoListItem