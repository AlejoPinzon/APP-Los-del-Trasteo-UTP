<template>
    <div class="loginbd">
    <div class="container w-75 bg-primary mt-5 rounded shadow" >
      <div class="row align-items-center align-items-stretch">
        <div class="col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded bg">
    </div>

    <div class="col bg-white p-5 col-lg-7 col-xl-6 rounded-end">
        <div class="text-end">
        </div>
            <div class="col bg-white">
                <h2 class="fw-bold text-center pt-5 mt-5">Iniciar Sesión o Registrarse</h2>
                <h5 class="text-center mb-5">Hola! Bienvenido a tu próximo servicio de mudanza...</h5>

                <form action="#">
                    <div class="text-aling-left">
                        <label for="Usuario" class="form-label">Usuario</label>
                        <input type="text" class="form-control" name="nombre-usuraio">
                    </div>
                    <div class="text-aling-left mb-4">
                        <label for="Contraseña" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" name="password">
                    </div>
                     <div class="text-center mb-3">
                         <button type="submit" class="btn2 btn-primary">Iniciar Sesión</button>
                     </div>
                     <div class="text-center">
                         <span><a href="#">¿Olvidaste tu contraseña?</a></span>
                     </div>
                </form>

                <div class="container w-100 my-5">
                    <div class="row">
                        <div class="col">
                            <button class="btn btn-outline-primary w-100 my-1">
                                <div class="row aling-items-center">
                                    <div class="col-2">
                                        <b-img :src="require('../../img/facebook.png')" width="28" :img-alt="altText"></b-img>
                                    </div>
                                    <div class="col-10 text-center fw-bold">
                                        Ingresa con Facebook
                                    </div>
                                </div>

                            </button>

                        </div>
                        <div class="col">
                            <button class="btn btn-outline-danger w-100 my-1">
                                <div class="row aling-items-center">
                                    <div class="col-2">
                                        <b-img :src="require('../../img/google.png')" width="28" :img-alt="altText"></b-img>
                                    </div>
                                    <div class="col-10 text-center fw-bold">
                                        Ingresa con Google
                                    </div>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
                <div class="my-3 text-center">
                    <span>No tienes cuenta?</span>
                    <router-link to="/profile" class=" btn-primary" >Regístrate</router-link>
                </div>
            </div>
        </div>

    </div>

    </div>
</div>
</template>

<style>
    

        .bg{
          background: url("../../img/img7.png");
          background-position: center;

        }
    </style>