<template>
  <div class="">
    <section id="about" class="about-area">
        <div class="container">
            <div class="row">
                <div class="col-12">

                    <div class="about-wrapper">
                        
                        <div class="about-right-side">
                            <div class="section-title-area">
                                <SectionHeading :title="title" />
                                <SectionSubHeading :subTitle="subTitle" />                           
                            </div>
                          
                        </div>
                     
                        <div class="about-left-side wow fadeInLeft">
                            <b-img :src="aboutImg" :img-alt="altText"></b-img>
                        </div>
                        <!--About Left Side End-->



                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- About Area End -->
  </div>
</template>

<script>
import SectionHeading from '../home/SectionHeading.vue'
import SectionSubHeading from '../home/SectionSubHeading.vue'

export default {
  name: 'About1',
  components: {
    SectionHeading,
    SectionSubHeading,
  },

  data() {
    return {
      aboutImg: require('../../assets/img/about-page-left.png'),
      altText: 'About',
      title: 'Elige el que más se Ajuste',
      subTitle: 'LosDelTrasteo Somos especialistas en transporte de carga a nivel nacional. Movemos tu casa, oficina, bodega, fabrica y el árbol favorito de tu perro!.',

    };
  },
}
</script>
