
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

    for(i=1; i<acc.length; i++){
        if(username == acc[i].username && password == acc[i].password){
            console.log("Login Connected")
        }
    }
}