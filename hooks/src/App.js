import React, { useState, useReducer, useEffect } from "react";

// function counter(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { counter: state.counter + 1 };
//     case "decrement":
//       return { counter: state.counter - 1 };
//     default:
//       return state;
//   }
// }

export default function App() {
  //const [state, dispatch] = useReducer(counter, { counter: 0 });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = counter;
  }, [counter]);

  return (
    <div>
      <h1>Contador {counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>Aumentar</button>
      <button onClick={() => setCounter(counter - 1)}>Diminuir</button>
    </div>
  );
}

//useEffect() com apenas um parametro: componentDidMount, componentDidUpdate
//useEffect(2 parametros) : [] componentDidMount, componentDidUpdate(comparação)
