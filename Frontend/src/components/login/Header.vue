<template>
    <div>
        <!--Main Menu/ Mobile Menu Section-->
        <section class="menu-section-area2">
            <!-- Navigation -->
            <b-navbar v-b-scrollspy:list-of-sections v-b-scrollspy="20" class="navbar navbar-expand-lg fixed-top d-none d-sm-none d-md-block d-lg-block d-xl-block" id="mainNav2">
                <div class="container">
                    <router-link class="navbar-brand js-scroll-trigger" to="/">
                    <b-img :src="require('../../assets/img/logo.png')" img-alt="Los del trasteo" class="img-fluid"></b-img>
                    </router-link>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav text-capitalize ml-auto">
                            
                            <li class="nav-item">
                                <router-link to="/login" class="nav-link js-scroll-trigger theme-button" >Vinculate</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </b-navbar>
            <!-- Navigation -->

            <!-- Mobile Menu Start -->  
            <b-navbar toggleable="lg" v-b-scrollspy:list-of-sections v-b-scrollspy="20" class="mobile_menu fixed-top hidden d-none" id="mainNavMobile">
                <b-container fluid>
                    <b-navbar-brand to="/"><b-img :src="require('../../assets/img/logo.png')" img-alt="RATH Logo" class="img-fluid mobile-logo "></b-img></b-navbar-brand>

                    <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
                    <b-navbar-toggle target="nav-collapse">
                        <template v-slot:default="{ expanded }">
                            <b-icon v-if="expanded" icon="x"></b-icon>
                            <b-icon v-else icon="list"></b-icon>
                        </template>
                    </b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto">
                            <b-nav-item href="#home">Home</b-nav-item>
                            <b-nav-item-dropdown to="/" text="Conocenos" no-caret class="fas fa-angle-down">
                                <b-dropdown-item to="/">Nuestro Equipo</b-dropdown-item>
                                <b-dropdown-item to="/home2">Noticias</b-dropdown-item>
                                <b-dropdown-item to="/home3">Blog</b-dropdown-item>
                            </b-nav-item-dropdown>
                            <b-nav-item href="#about">Servicios</b-nav-item>
                            <b-nav-item href="#contact">Contactanos</b-nav-item>
                            <b-nav-item href="#download"><span class="theme-button">Vinculate</span></b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>

                </b-container>
            </b-navbar>
            <!-- Mobile Menu End -->
        </section>
        <!--Main Menu/ Mobile Menu Section-->
    </div>
</template>

<script>

export default {
  name: 'Header1',

    mounted: function () {
    
    // Menu Js
    this.$nextTick(function () {

      window.onscroll = function() {myFunction()};

      var header = document.getElementById("mainNav");
      var sticky = header.offsetTop;
      
      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("navbar-shrink");
        } else {
          header.classList.remove("navbar-shrink");
        }
      }
      
    })
    // Menu End

  },

}
</script>

<style>
/* Mobile Dropdown CSS */
.menu-section-area #mainNavMobile.navbar {
	background-color: #3f51b5;
	box-shadow: 0 2px 9px rgba(0, 0, 0, 0.2);
	padding: 0 1rem;
}
#mainNavMobile .navbar-nav {
	background: #fff;
}
#mainNavMobile .navbar-toggler {
	color: #fff;
	border-color: transparent;
	font-size: 34px;
	padding: 0.25rem 0;
}
#mainNavMobile .navbar-nav li.nav-item {
	z-index: 9;
    position: relative;
    border-bottom: 1px solid#ffff;
}
#mainNavMobile .navbar-nav li.nav-item:hover, #mainNavMobile .navbar-nav li.nav-item.active {
    background-color: #2ca6ef;
}
#mainNavMobile .navbar-nav li:last-child:hover {
	background-color: transparent;
}
#mainNavMobile .navbar-nav .nav-link {
	color: #2c303a;
	padding: 16px 15px 18px;
	line-height: 15px;
}
.menu-section-area .nav-item.dropdown::before {
	position: absolute;
	right: 15px;
	top: 15px;
	font-size: 20px;
	z-index: -1;
	color: #2c303a;
}
.menu-section-area .nav-item .nav-link, ul.dropdown-menu .dropdown-item{
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
}
#mainNavMobile .navbar-nav li:last-child span {
	width: auto;
	text-align: center;
	padding: 11px 27px 16px;
}
#mainNavMobile .navbar-nav li .dropdown-item {
	padding: 16px 15px 18px;
}
#mainNavMobile .navbar-nav ul.dropdown-menu li:hover {
    background-color: #2ca6ef;
}
#mainNavMobile .dropdown-item:hover, #mainNavMobile .dropdown-item:focus {
	color: #fff;
	background-color: transparent;
}
</style>