import { useState, useEffect } from 'react';

/* 2. Create one counter variable. Create two buttons that will increment/decrement the value of the counter respectively.
     Show the result.
  3. Implement the following scenario:
      * If the value of the counter is equal to 10 - hide the increment button ( the counter should never be greater than 10 ).
      * If the value of the counter is equal to 0 - hide the decrement button  ( the counter should never be smaller than 0 ).
     Only one button should be displayed at a given time. 
     The task should be implemented with useState and useEffect hooks.
*/
const App = () => {
  let [counter, setCounter] = useState(0);
  const [showIncrementButton, setIncrementButton] = useState(true)

  useEffect(() => {
   if (counter === 10) {
    setIncrementButton(false)
   } else if (counter === 0) {
    setIncrementButton(true)
   }
  }, [counter])

  const onIncrement = () => {
    setCounter(state => {
      return state + 1;
    })
  }
  const onDecrement = () => {
    setCounter(state => {
      return state - 1;
    });
  }
 
        return (
          <div id='app'>
          <p> Counter: {counter} </p>
          {showIncrementButton
          ?
          <button onClick={onIncrement}>+</button>
          :
          <button onClick={onDecrement}>-</button>
          }

          </div>
          )
        
      }



export default App;
