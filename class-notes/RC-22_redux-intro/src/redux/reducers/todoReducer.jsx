
//mutfak

const initial = {
  gorevler: [
    { id: 0, yazi: "Redux Çalışıyoruz", completed: false },
    { id: 1, yazi: "köpekleri gezdir", completed: true },
  ],
};



const todoReducer = (state=initial, {type, payload}) => {
  switch (type) {
    case "EKLE":
      return{
        gorevler: 
          [
            ...state.gorevler,
            {id:state.gorevler.length, 
              yazi:payload, 
              completed:false}]}
    case "SIL":
      return { 
        gorevler: 
        state.gorevler.filter((item) => item.id !== payload.id)};

    case "COMPLETEDD":
      return {
        gorevler: state.gorevler.map(todo =>
        todo.id === payload.id
          ? { ...todo, completed: !todo.completed }
          : todo)
      }
      
    default:
      return state;
      
  }}

export default todoReducer;