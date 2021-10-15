<template>
  <div class="">
    <!-- Header Start -->
    <header id="home" class="home-banner-area position-relative">
        <div class="particle-bg">
          <b-img :src="particleImage" :img-alt="altText"></b-img>
          </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!--Hero Area Wrapper-->
                    <div class="hero-area-wrapper position-relative wow fadeInLeft">
                        <div class="hero-area-content">
                            <h1>{{ heroTitle }}</h1>
                            <p>{{heroSubTitle}}</p>
                            
                        <div class="buscador">
                            <div class="form-group"> 
            <label for="select">Seleccionar Tipo de Servicio</label>
            <select name="select" id="select" class="custom-select">
               <option value="1">Hogares</option>
               <option value="2">Empresas</option>
               <option value="3">Embalaje</option>
               <option value="4">Embalaje+Transporte</option>
               <option value="5">Transporte</option>
            </select>
    
        </div>

        <div class="form-group"> 
        <label for="select">Seleccionar Origen</label>
        <select name="select" id="select" class="custom-select">
           <option value="1">Bogotá</option>
           <option value="2">Boyacá</option>
           <option value="3">Cundinamarca</option>
           <option value="4">Meta</option>
           <option value="5">Nariño</option>
        </select>

    </div>

    <div class="form-group"> 
        <label for="select">Seleccionar Destino</label>
        <select name="select" id="select" class="custom-select">
           <option value="1">Bogotá</option>
           <option value="2">Boyacá</option>
           <option value="3">Cundinamarca</option>
           <option value="4">Meta</option>
           <option value="5">Nariño</option>
        </select>

    </div>
    </div>
                            
                            <div class="hero-button-box">
                                <a href="#" class="theme-button"><i class=""></i>Trasteate Ya!</a>
                            </div>
                        </div>
                    </div>
                    <!--Hero Area Wrapper-->
                </div>
            </div>
        </div>
        
        <div class="btn-wsp">
            <a href="https://api.whatsapp.com/send?phone=+573017893573" target="Contacta a un asesor"><img :src="require('../../assets/img/chat.png')"></a>
        </div> 
    </header>
    <!-- Header End -->
  </div>
</template>

<script>
export default {
  name: 'Banner1',

  data(){
    return {
      particleImage: require('../../assets/img/hero-bg-effect.png'),
      altText: 'particle',
      heroTitle: 'Múdate sin Complicaciones',
      heroSubTitle: 'Déjanos el trabajo pesado, tenemos el servicio indicado a tus necesidades estés donde estés.'
    }
  }

}
</script>
