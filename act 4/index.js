
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

        if(!found){
            alert("Access Denied")
            document.getElementById("w").style.display = "block";
            document.getElementById("w").style.color = "red";
    
            if(username != acc[i].username){
                document.getElementById("txtEmail").style.borderBottomColor = "red";
                break
            }else if(password != acc[i].password){
                document.getElementById("txtPass").style.borderBottomColor = "red";
                break
            }else {
                document.getElementById("txtEmail").style.borderBottomColor = "red";
                document.getElementById("txtPass").style.borderBottomColor = "red";
                break
            }
        }
    }
}