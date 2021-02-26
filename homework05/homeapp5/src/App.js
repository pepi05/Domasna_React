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
  let [counter, setCounter] = useState(1);
  const[disabled, setDisabled] = useState(false)
  
 
  useEffect(() => {
   if (counter === 10) {
     console.log('hide inc button')
   } else if (counter === 0) {
     console.log('hide dec button')
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

  const btnDisable = () => {
    setDisabled(state => {
      return !state;
    })
  }
  

      if (counter===10) {
        return (
          <div id='app'>
         <button type='button' disabled ={disabled} onClick={btnDisable}>+</button>
      <p> {counter} </p>
      <button onClick={onDecrement}>-</button>
      </div>
        ) 
      } else if (counter===0) {
        return (
          <div id='app'>
          <button onClick={onIncrement}>+</button>
       <p> {counter} </p>
       <button type='button' disabled ={disabled} onClick={btnDisable}>-</button>
       </div>
        )  
      } else {
        return (
          <div id='app'>
        <button onClick={onIncrement}>+</button>
          <p> {counter} </p>
          <button onClick={onDecrement}>-</button>
          </div>)
        
      
      }

}

export default App;
