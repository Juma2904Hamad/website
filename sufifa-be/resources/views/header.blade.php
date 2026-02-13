<style>

.main-header .navbar-nav .nav-link{

  font-weight:500 !important;
  padding:15px 32px !important;
  position:relative !important;
  overflow:hidden !important;
  transition: color .3s ease !important;
  z-index:0 !important;
  color: var(--white-color);
}


.main-header .navbar-nav .nav-link::before{
  content:"" !important;
  position:absolute !important;
  left:0 !important;
  bottom:0 !important;
  width:100% !important;
  height:0% !important;
  background:#dd7327 !important;
  transition: height .3s ease-in-out !important;
  z-index:-1 !important;
}


.main-header .navbar-nav .nav-link:hover{
  color:#fff !important;
}
.main-header .navbar-nav .nav-link:hover::before{
  height:100% !important;
}


.main-header .navbar-nav .nav-link.active{
  color:#fff !important;
}
.main-header .navbar-nav .nav-link.active::before{
  height:100% !important;
}

</style>

<body>

    <!-- Topbar Section Start -->
    <div class="topbar">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-2">
                    <div class="site-logo">
                        <a href="index.html">
                            <img src="assets/img/logo.png" alt="Logo">
                        </a>
                    </div>
                    <!-- Logo End -->
                </div>

                <div class="col-lg-9 col-md-12">
                    <!-- Topbar Contact Information Start -->
                    <div class="topbar-contact-info">
                        <ul>
                            <li>
                                <a href="#">
                                    <div class="icon-box">
                                        <img src="assets/img/icon-phone.svg" alt="">
                                    </div>
                                    <p class="fs-4">+255 762 531 016</p>
                                </a>
                            </li>
                            <li class="ms-3">
                                <a href="#">
                                    <div class="icon-box">
                                        <img src="assets/img/icon-mail.svg" alt="">
                                    </div>
                                    <p class="fs-4">info@survex.co.tz</p>
                                </a>
                            </li>
                        </ul>
                        <!-- Topbar Qoute Button Start -->
                        <div class="topbar-qoute-btn">
                            <a href="contact.html" class="btn-default"><span>Get a quote</span></a>
                        </div>
                        <!-- Topbar Qoute Button End -->
                    </div>
                    <!-- Topbar Contact Information End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar Section End -->

    <!-- Header Start -->
    <header class="main-header">
        <div class="header-sticky">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <!-- Logo Start -->
                    <a class="navbar-brand d-block d-lg-none" href="index.html">
                        <img src="assets/img/survex.png" alt="Logo">
                    </a>
                    <!-- Logo End -->

                    <!-- Main Menu Start -->
                    <div class="collapse navbar-collapse main-menu">
                        <div class="nav-menu-wrapper">
                            <ul class="navbar-nav mr-auto" id="menu">
                                <li class="nav-item">
                                    <a class="nav-link active" href="index.html">HOME</a>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="about.html">ABOUT US</a></li>
                                <li class="nav-item"><a class="nav-link" href="services.html">SERVICES</a></li>
                                <li class="nav-item"><a class="nav-link" href="projects.html">OUR TEAM AND PARTNERS</a></li>
                                <li class="nav-item"><a class="nav-link" href="contact.html">CONTACT US</a></li>
                            </ul>
                        </div>

                        <!-- Header Social Box Start -->
                        <div class="header-social-box d-inline-flex">
                            @include('social-media')
                        </div>
                        <!-- Header Social Box End -->
                    </div>
                    <!-- Main Menu End -->
                    <div class="navbar-toggle"></div>
                </div>
            </nav>
            <div class="responsive-menu"></div>
        </div>
    </header>
    <!-- Header End -->

</body>
