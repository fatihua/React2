import { useState } from "react";
import { useDispatch } from "react-redux";
import { ekle } from "../../redux/actions/todoActions";


const TodoInput = () => {
const [input, setInput] = useState("")

const dispatch = useDispatch()

const handleSubmit=(e)=>{
  e.preventDefault()
  //! ekle fonksiyonuna ihtiyaç var
  if (input.trim()) {
    dispatch(ekle(input));
    setInput("");
}}
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        onChange={(e)=>setInput(e.target.value)}
        value={input}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
