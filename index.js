const stateForm = {
    name:false,
    lastName:false,
    email:false,
    password:false
}
const form = document.getElementById('form');
const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/

const changeInput = (BoxInput,idInput,chekedInput) => {
    const input = document.getElementById(idInput);
    const input__svg = BoxInput.querySelector('.inputBox__svg');
    const input__info = BoxInput.querySelector('.inputBox__info');
    BoxInput.addEventListener('input', e =>{
        const state = chekedInput(input.value);
        if(!state.value){
            input.classList.toggle('inputBox__input--error',true);
            input__svg.classList.toggle('inputBox__svg--none',false);
            input__info.classList.toggle('inputBox__info--error',true);
            input__info.textContent = state.info;
        }else{
            input.classList.toggle('inputBox__input--error',false);
            input__svg.classList.toggle('inputBox__svg--none',true);
            input__info.classList.toggle('inputBox__info--error',false);
        }
    })
}

const inputBoxName = document.getElementById('BoxInput-name');
const inputBoxLastName = document.getElementById('BoxInput-lastName');
const inputBoxEmail = document.getElementById('BoxInput-email');
const inputBoxPassword = document.getElementById('BoxInput-password');

changeInput(inputBoxName,'name',(value) =>{
    const state = {
        value:false,
        info:''
    }
    if(usernameRegex.test(value)){
        stateForm.name = true;
    }else{
        if(value.length == '') state.info = 'name cannot be empty';
        else if(value.length < 3) {
            state.info = 'name must contain more than two characters';
        }
        stateForm.name = false;
    }
    state.value = stateForm.name;
    return state;
});

changeInput(inputBoxLastName,'lastName',(value) =>{
    const state = {
        value:false,
        info:''
    }
    if(usernameRegex.test(value)){
        stateForm.lastName = true;
    }else{
        if(value.length == '') {
            state.info = 'email cannot be empty';
        }else if(value.length < 3) {
            state.info = 'name must contain more than two characters';
        }
        stateForm.lastName = false;
    }
    state.value = stateForm.lastName;
    return state;
});

changeInput(inputBoxEmail,'email',(value) =>{
    const state = {
        value:false,
        info:''
    }
    if(emailRegex.test(value)){
        stateForm.email = true;
    }else{
        console.log(value.length);
        if(value.length == '') state.info = 'email cannot be empty';
        else state.info = 'Looks like this is not on email';
        stateForm.name = false;
    }
    state.value = stateForm.email;
    return state;
});

changeInput(inputBoxPassword,'password',(value) =>{
    const state = {
        value:false,
        info:''
    }
    if(passwordRegex.test(value)){
        stateForm.password = true;
    }else{
        if(value.length == '') state.info = 'password cannot be empty';
        else state.info = 'the password must have capital letters and numbers';
        stateForm.password = false;
    }
    state.value = stateForm.password;
    return state;
});


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const menssage = document.getElementById('message');
    if(!stateForm.name || !stateForm.lastName || !stateForm.email || !stateForm.password){
        menssage.classList.add('message--error');
        menssage.querySelector('p').textContent = 'the fields are incorrect';
        console.log(stateForm);
    }else{
        //correct inputs
        menssage.classList.remove('message--error');
        menssage.querySelector('p').textContent = '';
    }
    
})