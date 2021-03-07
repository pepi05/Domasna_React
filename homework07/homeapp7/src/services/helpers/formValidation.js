const validateFirstName = (firstName) => {
    let validation = {
        valid: true,
        errorMsg: '',
    };

    if (firstName === '') {
        validation.valid = false;
        validation.errorMsg = 'First Name is required!';
        return validation;
    }

    if (firstName.length < 2 || firstName.length > 15) {
        validation.valid= false;
        validation.errorMsg = 'First name must contain between 2 and 15 characters';
        return validation;
    }
    return validation;
};


const validateLastName = (lastName) => {
    let validation = {
        valid:true,
        errorMsg: '',
    };

    if (lastName === '') {
        validation.valid = false;
        validation.errorMsg = 'Last Name is required!';
        return validation;
    }

        if (lastName.length < 2 || lastName.length > 20 ) {
        validation.valid= false;
        validation.errorMsg = 'Last name must contain between 2 and 20 characters';
        return validation;
    }
    return validation;
};


const validateMail = (email) => {
   let validation = {
       valid:true,
       errorMsg: '',
   }

   if(email.includes('@') === false) {
       validation.valid = false;
       validation.errorMsg = 'mail must contain @';
       return validation;
   }
   return validation;
};


const validatePassword = (password) => {
    let validation = {
        valid: true,
        errorMsg: '',
    };

    if (password === '') {
        validation.valid = false;
        validation.errorMsg = 'password is required';
        return validation;
    }
    if (password.length < 5 || password.length > 10) {
        validation.valid = false;
        validation.errorMsg = 'password must be between 5 and 10 characters';
        return validation;
    }
    return validation;
};

let validationFunctions = {
    validateFirstName,
    validateLastName,
    validateMail,
    validatePassword
};

export default validationFunctions;