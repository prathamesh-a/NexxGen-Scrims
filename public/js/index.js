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

document.getElementById("feedback_form").addEventListener("submit",(event)=>{
    event.preventDefault();
})

function feedBackSend(){
    const email = document.getElementById("feedback_user_email").value;
    const text = document.getElementById("feedback_user_text").value;
    db.collection("feedBack").add({
        email: email,
        message: text,
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById("feedback_user_email").value = " ";
        document.getElementById("feedback_user_text").value = "";
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}