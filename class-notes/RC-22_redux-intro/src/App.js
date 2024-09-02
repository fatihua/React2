import React from 'react'
import "./App.css"
import Counter from "./components/counter/Counter"
import { Provider } from "react-redux";
import { store } from './redux/store';
import Todo from "./components/todo/Todo";


const App = () => {
  return (
    <div className='app'>

    <Provider store={store}>
      <Counter />
      <Todo/>
    </Provider>
    </div>
  )
}

export default App