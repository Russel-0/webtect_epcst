<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/style.css">
    <title>SPA LOGIN</title>
</head>
<body>
    
    <h1>HELLO WELCOME!</h1>
    
    <div class="container">
        <form action="post">
            <h1>Login</h1>
            <span id="error">Invalid username or password!</span>
            <div class="form">        
                <input id="txtEmail" type="email" placeholder="Email">
            </div>
            <div class="form">
                <input id="txtPass" type="password" placeholder="Password">
            </div>
            <div class="remember">
                <input type="checkbox" placeholder="checkbox">
                <label>remember me</label>
            </div>
            <div class="forgot-pass">       
                <a href="#">Forgot password?</a>
            </div>
            <div class="form">
                <button id="btnLogin" type="button" onclick="login()">Sign in</button>
            </div>  
            <div class="new">
                <a href="/finals/signup.php">Sign Up</a>
            </div>
            <div>
                <a href="/finals/act3/index.php">Back to Home</a>
            </div>
        </form>
    </div>

    <script src="index.js "></script>

</body>
</html>