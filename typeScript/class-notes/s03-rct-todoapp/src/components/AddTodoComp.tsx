import { Box, Button, TextField } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import { useState } from 'react';


//! 1. kullanım
// const AddTodoComp = ({addTodo}:{addTodo :(text:string)=>Promise<void>}) => {
  // // const [text, setText] = useState<string>('')
//   const [text, setText] = useState('')

//   const handleClick = ()=>{
//     addTodo(text);
//     setText("")
//   }
//   return (
//     <div>
//       <Box>
//         <TextField
//           id='outlined-disabled'
//           label='New Todo'
//           variant='outlined'
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           />

//           <Button 
//           variant='contained' 
//           color='success'
//           disabled={!text.trim()} 
//           onClick={handleClick} 
//           endIcon={<SaveIcon/>}>
//             Save Todo
//           </Button>
//       </Box>
//     </div>
//   )
// }

// export default AddTodoComp


//! 2. kullanım
interface IAddTodoComp {
  // addTodo:(text:string)=>Promise<void>;
  addTodo:AddFn;
}

const AddTodoComp = ({addTodo}:IAddTodoComp) => {
  // const [text, setText] = useState<string>('')
  const [text, setText] = useState('')

  const handleClick = ()=>{
    addTodo(text);
    setText("")
  }
  return (
    <div>
      <Box>
        <TextField
          id='outlined-disabled'
          label='New Todo'
          variant='outlined'
          value={text}
          onChange={(e) => setText(e.target.value)}
          />

          <Button 
          variant='contained' 
          color='success'
          disabled={!text.trim()} 
          onClick={handleClick} 
          endIcon={<SaveIcon/>}>
            Save Todo
          </Button>
      </Box>
    </div>
  )
}

export default AddTodoComp