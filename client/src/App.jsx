import useToggle from "./Hooks/useToggle";
import useCounter from "./Hooks/useCounter";
import useCounterWithStep from "./Hooks/useCounterWithStep";
import useInput from "./Hooks/useInput";
import useTextarea from "./Hooks/useTextarea";
import useLocalStorageState from "./Hooks/useLocalStorageState";
import useSessionStorageState from "./Hooks/useSessionStorageState";
import usePrevious from "./Hooks/usePrevious";

function App() {
  const { value, toggle } = useToggle();
  const { valueNumber, inc, dec, reset } = useCounter(10);
  const { valueNumber2, inc2, dec2, reset2 } = useCounterWithStep(10, 5);
  const [value3, onChange, reset1] = useInput();
  const { value5, onChange5, reset5 } = useTextarea();
  const { value6, setValueFunc6, setValue6, remove6 } = useLocalStorageState(10, 100);
  const { value7, setValueFunc7, setValue7, remove7 } = useSessionStorageState(10, 100);
  const {oldValue ,previousValue, setValue8} = usePrevious()
   

  return (
    <div>
      <button onClick={toggle}>click</button>
      <p>{String(value)}</p>
      <hr />
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={reset}>reset</button>
      <p>{String(valueNumber)}</p>
      <hr />
      <button onClick={inc2}>inc</button>
      <button onClick={dec2}>dec</button>
      <button onClick={reset2}>reset</button>
      <p>{String(valueNumber2)}</p>
      <hr />
      <input type="text" value={value3} onChange={onChange} />
      <p>{String(value3)}</p> <button onClick={reset1}>reset</button>
      <hr />
      <textarea value={value5} onChange={onChange5}></textarea>
      <p>{String(value5)}</p> <button onClick={reset5}>reset</button>
      <hr />
      <input onChange={(e) => setValue6(e.target.value)} type="text" />
      <button onClick={setValueFunc6}>send</button>
      <button onClick={remove6}>remove</button>
      <p>{String(value6)}</p>
      <hr />
      <input onChange={(e) => setValue7(e.target.value)} type="text" />
      <button onClick={setValueFunc7}>send</button>
      <button onClick={remove7}>remove</button>
      <p>{String(value7)}</p>
      <hr />
      <h3>8</h3>
      <input onChange={(e) => setValue8(e.target.value)} type="text" />
      <button onClick={previousValue}>set</button>
      <p>{oldValue}</p>
    </div>
  );
}

export default App;
