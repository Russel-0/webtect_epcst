
function login() {

    var acc = [
        {
            username: "russel",
            password: "calderon"
        },
        {
            username: "russel1",
            password: "calderon1"
        },
        {
            username: "russel2",
            password: "calderon2"
        }
    ];

    var username = document.getElementById("txtEmail").value;
    var password = document.getElementById("txtPass").value;
    var found = false;

    for (var i = 0; i < acc.length; i++) {
        if (username == acc[i].username && password == acc[i].password) {
            alert("Login Connected");
            window.location.href = "/act 4/act3/index.html";
            found = true;
            break;
        }
    }

    if (!found) {
        alert("Access Denied");
        document.getElementById("w").style.display = "block";

        for (var i = 0; i < acc.length; i++) {
            if (username != acc[i].username) {
                document.getElementById("txtEmail").style.borderBottomColor = "red";
            } else if (password != acc[i].password) {
                document.getElementById("txtPass").style.borderBottomColor = "red";
            } else {
                document.getElementById("txtEmail").style.borderBottomColor = "red";
                document.getElementById("txtPass").style.borderBottomColor = "red";
            }
        }
    }
}


function signup() {

    const password = document.getElementById("txtPass").value;

    var sChar = /[!@#$%^&*(),.?":{}|<>]/;
    var num = /\d/;

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
    } else if (!password.match(sChar)) {
        alert("Password must contain at least one special character.");
    } else if (!password.match(num)) {
        alert("Password must contain at least one numeric digit.");
    } else {
        alert("Sign up successful");
        window.location.href = "/act 4/login.html";
    }
}
