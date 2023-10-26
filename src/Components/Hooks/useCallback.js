import { useCallback, useMemo, useState } from "react";
import TodosComponent from "./todos";
import useCounter from "./CustomHook/useCounter";

export const CallbackExample = () => {
  // const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // const increment = () => {
  //   setCount((c) => c + 1);
  // };
  const { count, increment, decrement } = useCounter();

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  return (
    <>
      <TodosComponent todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <h2>Calculation</h2>
      {calculation}
    </>
  );
};

const expensiveCalculation = (val) => {
  console.log("Calculating...");
  for (let i = 0; i < 100; i++) {
    val += 1;
  }
  return val;
};
