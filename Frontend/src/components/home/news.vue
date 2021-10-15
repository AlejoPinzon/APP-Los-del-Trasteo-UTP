<template>
    <section id="news" class="all-blog-posts-area bg-primary">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title-area">
                        <SectionHeading title="Noticias" />
                        <SectionSubHeading subTitle="Enterate de nuestras últimas novedades" />
                    </div>
                </div>
            </div>
<div class="noticias-container">
                <div class="noticias-box">
                    <b-img :src="require('../../assets/img/noticias-1.jpg')" :img-alt="altText"></b-img>
                    <div class="noticias-texto">
                        <span>09/04/21</span>
                        <a href="#" class="titulo-noticias">Mejores Metodos Para Empacar Tus Cosas. </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt a quo culpa consectetur architecto repudiandae iusto qui commodi magnam tempora, consequatur expedita ipsam vero eius iure necessitatibus soluta at.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
                <div class="noticias-box">
                    <b-img :src="require('../../assets/img/noticias-3.jpg')" :img-alt="altText"></b-img>
                    <div class="noticias-texto">
                        <span>09/08/21</span>
                        <a href="#" class="titulo-noticias">10 Tips Para Tener Una Mudanza Fácil.</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt a quo culpa consectetur architecto repudiandae iusto qui commodi magnam tempora, consequatur expedita ipsam vero eius iure necessitatibus soluta at.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
                <div class="noticias-box">
                    <b-img :src="require('../../assets/img/noticias-4.jpg')" :img-alt="altText"></b-img>
                    <div class="noticias-texto">
                        <span>09/12/2021</span>
                        <a href="#" class="titulo-noticias">Errores Comunes Al Realizar Una Mudanza. </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt a quo culpa consectetur architecto repudiandae iusto qui commodi magnam tempora, consequatur expedita ipsam vero eius iure necessitatibus soluta at.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
                <div class="noticias-box">
                    <b-img :src="require('../../assets/img/noticias-2.png')" :img-alt="altText"></b-img>
                    <div class="noticias-texto">
                        <span>09/14/21</span>
                        <a href="#" class="titulo-noticias">Razones Por Las Que Los Clientes Nos Escogen. </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt a quo culpa consectetur architecto repudiandae iusto qui commodi magnam tempora, consequatur expedita ipsam vero eius iure necessitatibus soluta at.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
            </div>
        <div class="row">
            <router-link to="/" class="theme-button">Más Noticias </router-link>
    </div>
</div>

</section>
</template>

<script>
import SectionHeading from '../home/SectionHeading.vue'
import SectionSubHeading from '../home/SectionSubHeading.vue'

export default {
  name: 'HomeBlog1Section',
  components: {
    SectionHeading,
    SectionSubHeading,
  }
}
</script>
