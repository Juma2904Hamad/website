<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Pharmacy Portal Login</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    <link rel="stylesheet" href="assets/css/main.css" />
</head>

<body>
    <div class="login-wrapper">
        <div class="left-side">
            <div class="overlay"></div>
        </div>
        <div class="right-side">
            <h2>Welcome Back !</h2>
            <form id="loginForm">
                <div class="input-group">
                    <i class="fa fa-envelope"></i>
                    <input type="email" name="email" placeholder="Email">
                </div>

                <div class="input-group">
                    <i class="fa fa-lock"></i>
                    <input type="password" name="password" placeholder="Password" id="password">
                    <i class="fa fa-eye" id="togglePassword"></i>
                </div>

                <div class="remember-me">
                    <label>
                        <input type="checkbox" name="remember" value="1"> Remember me
                    </label>
                    <a href="#">Forgot Password?</a>
                </div>


                <button type="submit" class="login-btn" id="loginBtn">
                    <span class="btn-spinner" style="display:none;"></span>
                    <span class="btn-success-icon">
                        <i class="fas fa-check"></i>
                    </span>
                    <span class="btn-text">Login</span>
                </button>
                <div id="formError" class="form-error"></div>
            </form>


        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="assets/js/login.js"></script>
</body>

</html>
