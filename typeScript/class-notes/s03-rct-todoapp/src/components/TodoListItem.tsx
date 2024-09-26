import { FC } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

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
    <ListItem
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment" onClick={()=> deleteTodo(todo.id)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText onClick={()=>toggleTodo(todo)} primary={todo.task} />
        </ListItem>
  )
}

export default TodoListItem