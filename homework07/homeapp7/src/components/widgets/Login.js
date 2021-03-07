import { useState } from 'react'
// components
import Input from '../ui/Input';
// helpers (functions)
import validationFunctions from '../../services/helpers/formValidation';
// Variables
const Login = () => {
    const [form, setForm] = useState({
        firstName: '',
        firstNameErrorMsg: '',
        lastName: '',
        lastNameErrorMsg: '',
        email: '',
        emailErrorMsg: '',
        password: '',
        passwordErrorMsg: '', 
    });

const [isFormSubmited, setIsFormSubmited] = useState(false);

 // functions
    const handleChange = (event) => {
        setForm(state => {
           return {
                ...state, 
            [event.target.name]: event.target.value
           }
        })
    };

    const submitForm = (event) => {
        event.preventDefault();
        setForm(state => {
            return {
                ...state,
                firstNameErrorMsg: '',
                lastNameErrorMsg: '',
                emailErrorMsg: '',
                passwordErrorMsg: ''
            }
        })
    // validation na submitForm
    let validateFirstName = validationFunctions.validateFirstName(form.firstName);
    let validateLastName = validationFunctions.validateLastName(form.lastName);
    let validateMail = validationFunctions.validateMail(form.email);
    let validatePassword = validationFunctions.validatePassword(form.password);

    if (!validateFirstName.valid) {
        setIsFormSubmited(false);
        setForm(state => {
            return {
                ...state,
                firstNameErrorMsg: validateFirstName.errorMsg
            }
        })
    } else if (!validateLastName.valid) {
        setIsFormSubmited(false);
        setForm(state => {
            return {
                ...state,
                lastNameErrorMsg: validateLastName.errorMsg
            }
        })
    } else if (!validateMail.valid) {
        setIsFormSubmited(false);
        setForm(state => {
            return {
                ...state,
                emailErrorMsg: validateMail.errorMsg
            }
        })
    } else if (!validatePassword.valid) {
        setIsFormSubmited(false);
        setForm(state => {
            return {
                ...state,
                passwordErrorMsg: validatePassword.errorMsg
            }
        })
    } else {
        setIsFormSubmited(true);
    }
  
}


    
    
    return (
        <div id='login'>
            {!isFormSubmited ?
            <form onSubmit={submitForm}>
                <Input type='text' placeholder='First name' name='firstName' value={form.firstName} onChange={handleChange} error={form.firstNameErrorMsg}/>
                <Input type='text' placeholder='Last name' name='lastName' value={form.lastName} onChange={handleChange} error={form.lastNameErrorMsg}/>
                <Input type='text' placeholder='Email' name='email' value={form.email} onChange={handleChange}error={form.emailErrorMsg}/>
                <Input type='password' placeholder='password' name='password' value={form.password} onChange={handleChange}error={form.passwordErrorMsg}/>
                <button type='submit'>Sign Up</button>
            </form>
            :
            <p>The form is valid</p>
}
        </div>
        
    )
}

export default Login;