document.getElementById("form").addEventListener("submit",(event)=>{
    event.preventDefault();
})

function bgmi(type){
    localStorage.setItem("type", "bgmi " + type);
    location.replace("../forms/tournament.html");
}

function valo(type){
    localStorage.setItem("type", "valo " + type);
    location.replace("../forms/tournament.html");
}

function fifaS(type){
    localStorage.setItem("type", "fifa " + type);
    location.replace("../forms/tournament.html");
}

function lolS(type){
    localStorage.setItem("type", "lol " + type);
    location.replace("../forms/tournament.html");
}

function submitForm(){
    const teamName = document.getElementById("teamName").value;
    const igl = document.getElementById("iglName").value;
    const p2 = document.getElementById("p2").value;
    const p3 = document.getElementById("p3").value;
    const p4 = document.getElementById("p4").value;
    const p5 = document.getElementById("p5").value;

    if (teamName !== "" && igl !== "" && p2 !== "" && p3 !== "" && p4 !== "" && p5 !== ""){
        db.collection("tournaments").add({
            type: localStorage.getItem("type"),
            team_name: teamName,
            igl_name: igl,
            player2_name: p2,
            player3_name: p3,
            player4_name: p4,
            player5_name: p5,
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                document.getElementById("teamName").value = "";
                document.getElementById("iglName").value = "";
                document.getElementById("p2").value="";
                document.getElementById("p3").value="";
                document.getElementById("p4").value="";
                document.getElementById("p5").value="";
                window.alert("Form sent successfully!");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }
}