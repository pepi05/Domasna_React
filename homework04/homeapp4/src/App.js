 /* Homework 05
    1. Create input fields for person's first name, last name, age, address, gender. Display the data.
    2. Create a button that will show/hide (toggle) the person info.
    <img
      src='https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
      alt='Back to the future'
    />
  
    3. For the given photo, implement function that will handle how many times the image has been clicked. Show the result. 
  */
 import { useState, useEffect } from 'react';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [adress, setAdress] = useState('');
  const [gender, setGender] = useState('');
  const[showData, setShowData] = useState(true)

  // useEffect hook

  // Task 02 - change the value for the age data for the user. If the age is greather than 18 show the age, else show message
  // that the use must be +18 to submit the form

  useEffect(() => {
  return  (age >= 18) ? console.log(age) : console.warn('user must be 18+')
  }, [age])



const onInputFirstName = (event) => {
 setFirstName(event.target.value);
}
const onInputLastName = (event) => {
  setLastName(event.target.value);
 }
 const onInputAge = (event) => {
   setAge(parseInt(event.target.value))
 }
 const onInputAdress = (event) => {
   setAdress(event.target.value)
 }
 const onInputGender = (event) => {
   setGender(event.target.value)
 }

 const toggleData = () => {
   setShowData(state => {
     return !state;
   })
 }


//  const toggle = () => {
//   let x = document.getElementById('info');
//   if (x.style.display === 'none') {
//     x.style.display = 'block';
//   } else {
//     x.style.display = 'none';
//   }
// }



const [clicker, setClicker] = useState(0)
const onImgClick = () => {
  setClicker(state => {
    return state +1;
  })
  
}

  return (
   <div id='app'>
     
    First name: <input type='text' name='firstName' placeholder='first name' value={firstName} onChange={onInputFirstName}></input> <br />
    Last name:  <input type='text' name='lastName' placeholder='last name' value={lastName} onChange={onInputLastName}></input> <br />
    age:        <input type='number' name='age' placeholder='age' value={age} onChange={onInputAge}></input> <br />
    Adress:     <input type='text' name='adress' placeholder='adress' value={adress} onChange={onInputAdress}></input> <br />
    Gender:     <input type='text' name='gender' placeholder='gender' value={gender} onChange={onInputGender}></input> <br />
   
    {/* <button onClick={toggle}>show/hide</button> */}
    <button onClick={toggleData}>Click me</button>

    {showData &&

    <div id='user data'>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName} </p>
      <p>age: {age}</p>
      <p>adress: {adress}</p>
      <p>Gender: {gender}</p>

    </div>
}
    
    <div id='image'>

  <img src='https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg' onClick={onImgClick} alt='Back to the future'/>

<p>Image clicks: {clicker}</p>
    

   </div>

   </div>
  );
}

export default App;
