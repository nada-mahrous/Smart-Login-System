//all inputs
var signupNameInput = document.getElementById('signupNameInput');//input kolo
var signupEmailInput = document.getElementById('signupEmailInput');//input kolo
var signupPasswordInput = document.getElementById('signupPasswordInput');//input kolo
var signinEmailInput = document.getElementById('signinEmailInput');//input kolo
var signinPasswordInput = document.getElementById('signinPasswordInput');//input kolo
var signUpBtn = document.getElementById('signUpBtn');
var logInBtn = document.getElementById('logInBtn');


// array to signUp
var signUpContainer = [];



if (localStorage.getItem('login') != null) {
    signUpContainer = JSON.parse(localStorage.getItem('login'));
}
else {
    signUpContainer = [];
}



// to check the inputs of signUp is empty or not
function isInputsEmpty() {
    if (signupNameInput.value == '' || signupEmailInput.value == '' || signupPasswordInput.value == '') {
        return false
    }
}

// to check if email is exist or not
function isEmailExist() {
    for (var i = 0; i < signUpContainer.length; i++) {
        if (signUpContainer[i].email.toLowerCase() == signupEmailInput.value.toLowerCase()) {
            return false
        }
    }
}


//function to add newuser
function signUp() {

    // check if inputs are empty
    if (isInputsEmpty() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false;
    }

    
    // to store all value as object
    var signUpInfo = {
        userName: signupNameInput.value,
        email: signupEmailInput.value,
        password: signupPasswordInput.value
    }

    

    // add newuser
    if (signUpContainer.length == 0) {
        signUpContainer.push(signUpInfo);
        localStorage.setItem('login', JSON.stringify(signUpContainer));
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
    }

    // check if there is exist this email
    if (isEmailExist() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
        signUpContainer.push(signUpInfo);
        localStorage.setItem('login', JSON.stringify(signUpContainer));
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        // location.replace('index.html');
    }
}
//calling
/* signUpBtn.addEventListener('click', function () {
    signUp();
}) */

//===========================================================================================================
// ============= For login================


//check if inputs are empty && 
function isLoginEmpty() {
    console.log(2);
    if (signinEmailInput.value == '' || signinPasswordInput.value == '') {
        // return false
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    } else
    {
        // check if user exist go to welcome page 
        // else display message user not exist 
        const formModel = {
            email: signinEmailInput.value,
            password: signinPasswordInput.value
        };
        if(validateForm(formModel) == true ){
            localStorage.setItem("userName",formModel.userName);
            location.replace('welcome.html');
        }else{
            alert('incorrect email or password');
        }
        
    } 
}
function validateForm(formModel){
    console.log(3);
    const users = JSON.parse(localStorage.getItem('login'));
    for(var i = 0; i < users.length ; i++){
        if( users[i].email == formModel.email && users[i].password == formModel.password){
            formModel.userName = users[i].userName;
            return true;
        }
    }
    
}
// check email incorrect or not
function isEmailCorrect() {
    for (var i = 0; i < signUpContainer.length; i++) {
        if (
            signUpContainer[i].email.toLowerCase() == signinEmailInput.value.toLowerCase() && signUpContainer[i].password.toLowerCase() == signinPasswordInput.value.toLowerCase()
            ) {
                return true
                
        }
    }
}


// function login   
function login() {
    console.log(1);
    isLoginEmpty();
}







//===========================================================================================================
// ============= welcome page================

/* function logout() {
    localStorage.removeItem('logOut' , signUpContainer[i].userName)
} */














































