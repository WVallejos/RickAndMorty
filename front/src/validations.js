export function validateInputs(inputs, errors) {
    const {name, value} = inputs;
    
    const usernameRegex = /^(?=.{1,35}$)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*\d)[A-Za-z\d]{6,10}$/;
switch(name) {
    case 'email': 
    usernameRegex.test(value) ? errors = {...errors, email: ''} : errors = {...errors, email: 'El username deberia ser un email valido, no estar vacio y no tener mas de 35 caracteres'}
    break;
    case 'password': 
    passwordRegex.test(value) ? errors = {...errors, password: ''} : errors = {...errors, password: 'La password deberia tener al menos un numero y ser entre 6 y 10 caracteres'}
    break;
}
    return errors
}