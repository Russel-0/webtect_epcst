
var acc = [
    {
        username:"russel",
        password:"calderon"
    },
    {
        username:"russel1",
        password:"calderon1"
    }
]

function getData() {

    var username = document.getElementById("txtEmail").value
    var password = document.getElementById("txtPass").value
    var found = false
    
    for(i=0; i<acc.length; i++){
        if(username == acc[i].username && password == acc[i].password){
            alert("Login Connected")
            window.location.href="/act 4/act3/index.html"
            found = true
            break;
        }
    }

    if(!found){
        alert("Access Denied")
    }
}