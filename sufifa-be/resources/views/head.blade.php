
<!DOCTYPE html>
<html lang="ens">
<head>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="Survex">
    <title>survex</title>
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet">
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="{{asset('assets/css/all.min.css')}}" rel="stylesheet" media="screen"/>
    <link href="assets/css/slicknav.min.css" rel="stylesheet" media="screen">
    <link href="assets/css/swiper-bundle.min.css" rel="stylesheet" media="screen">
    <link href="assets/css/animate.css" rel="stylesheet" media="screen">
    <link href="assets/css/magnific-popup.css" rel="stylesheet" media="screen">
    <link href="assets/css/mousecursor.css" rel="stylesheet" media="screen">
    <link href="assets/css/main.css" rel="stylesheet" media="screen">
</head>

<script>
    window.addEventListener("load", function () {
        const preloader = document.querySelector(".preloader");
        if (preloader) {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
            preloader.style.transition = "all 0.5s ease-out";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500); // Ensure it's gone completely after transition
        }
    });
</script>
