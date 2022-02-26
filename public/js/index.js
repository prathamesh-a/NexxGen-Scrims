var user1;
firebase.auth().onAuthStateChanged((user)=>{
    user1 = user;
    if(user){
        document.getElementById("login-register-button").innerHTML = "Logout";
    }
    else document.getElementById("login-register-button").innerHTML = "Login / Register";
})

function auth(){
    if (!user1) location.replace("login.html");
    else{
        firebase.auth().signOut();
    }
}

function feedBackSend(){
    
    window.alert("Your message has been sent");
}