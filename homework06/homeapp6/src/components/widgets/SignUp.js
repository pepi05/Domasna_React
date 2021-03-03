import { useState, useEffect } from "react";
import Input from '../ui/Input';



const SignUp = () => {

    const [form, setForm] = useState({
        fName:'',
        lName: '',
        mail: '',
        password: ''
    });
    const [isFormSubmited, setIsFormSubmited] = useState(false);
    const [showForm, setShowForm] = useState(true);

   useEffect(() => {
       {isFormSubmited ? setShowForm(false) : setShowForm(true)}
       },[isFormSubmited])

    
   const handleChange = (event) => {
        setForm(state => {
            return {
               ...state, [event.target.name]: event.target.value, 
            }
        });
    };

const submitForm = (event) => {
    event.preventDefault();
setIsFormSubmited(true);
}

    return (
        <div id='signup'>
            {showForm ?
            <form onSubmit={submitForm}>
                <Input type='text' placeholder='First name' name='fName' value={form.fName} onChange={handleChange} />
                <Input type='text' placeholder='Last name' name='lName' value={form.lName} onChange={handleChange} />
                <Input type='email' placeholder='E-mail' name='mail' value={form.mail} onChange={handleChange} />
                <Input type='password' placeholder='password' name='password' value={form.password} onChange={handleChange} />
                <button type='submit' >Submit</button>
            </form> 
            :
             <h3>User is successfully registered</h3> }
        </div>
    );
};

export default SignUp;