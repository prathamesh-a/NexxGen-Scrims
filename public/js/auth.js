firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("index.html");
    }
})


function login(){
    const userEmail = document.getElementById("login_user_email").value;
    const pass = document.getElementById("login_user_password").value;
    firebase.auth().signInWithEmailAndPassword(userEmail, pass)
        .catch((error)=>{
            window.alert(error.message);
        })
}

function signUp(){
    const userEmail = document.getElementById("signup_user_email").value;
    const userPass = document.getElementById("signup_user_pass").value;
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
        .then((userCredential) => {

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert(errorMessage);
        });
}





