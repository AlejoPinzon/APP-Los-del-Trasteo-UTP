<template>
  <div class="">
        <section id="team" class="app-screenshots-slider-area bg-white">
            <div class="background-shape position-absolute">
                <b-img :src="require('../../assets/img/app-screenshot-bg-effect.png')" img-alt="Screenshots"></b-img>               
                </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="section-title-area">
                            <SectionHeading :title="title" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="screenshots-slider-wrapper position-relative">

                            <div class="screenshots-slider position-relative">     
                                <carousel :margin="15" :loop="true" :center="true" :autoplay="false" :autoplaySpeed="true" :dots="true" :nav="true" :items="5" :responsive="{0:{items:1,nav:false},480:{items:1,nav:false},600:{items:1,nav:true},900:{items:3,nav:true},1200:{items:5,nav:true}}">
                                    
                                    <!-- single trainer start-->
                                    <div class="item">
                                        <div class="screenshots-box">
                                            <b-img :src="require('../../assets/img/screenshots-slider-img/app-sc-2.png')" img-alt="Screenshots"></b-img>
                                        </div>
                                    </div>
                                    <!-- single trainer end-->

                                    <!-- single trainer start-->
                                    <div class="item">
                                        <div class="screenshots-box">
                                            <b-img :src="require('../../assets/img/screenshots-slider-img/app-sc-3.png')" img-alt="Screenshots"></b-img>
                                        </div>
                                    </div>
                                    <!-- single trainer end-->

                                    <!-- single trainer start-->
                                    <div class="item">
                                        <div class="screenshots-box">
                                            <b-img :src="require('../../assets/img/screenshots-slider-img/app-sc-4.png')" img-alt="Screenshots"></b-img>
                                        </div>
                                    </div>
                                    <!-- single trainer end-->

                                    <!-- single trainer start-->
                                    <div class="item">
                                        <div class="screenshots-box">
                                            <b-img :src="require('../../assets/img/screenshots-slider-img/app-sc-5.png')" img-alt="Screenshots"></b-img>
                                        </div>
                                    </div>
                                    <!-- single trainer end-->

                                    <!-- single trainer start-->
                                    <div class="item">
                                        <div class="screenshots-box">
                                            <b-img :src="require('../../assets/img/screenshots-slider-img/mobile-bg.png')" img-alt="Screenshots"></b-img>
                                        </div>
                                    </div>
                                    <!-- single trainer end-->


                                </carousel>
                            </div>

                        </div>
                        <!-- Screenshots Slider Wrapper End-->
                    </div>
                </div>
            </div>
        </section>
        <!-- App Screenshots Slider Area End -->
  </div>
</template>

<script>
import SectionHeading from '../default/SectionHeading.vue'
// Client Logo Slider
import carousel from 'vue-owl-carousel'

export default {
  name: 'ScreenShots',
  components: {
    SectionHeading,
    carousel
  },
  data() {
    return {
        title: 'Conoce Nuestro Equipo',
        subTitle: 'Maecenas pretium neque vel odio tristique sagittis. Mauris nec erat id erat rhoncus fringilla ac et tellus. Praesent eu sodales est.',
    };
  }
}
</script>

<style>
.screenshots-slider .owl-theme .owl-nav {
	text-align: right;
	bottom: -19px;
	position: absolute;
	right: 0;
	margin-right: 10%;
}
.screenshots-slider .owl-theme .owl-nav [class*="owl-"] {
	color: #fff;
    background: #2f5266;
    border: 1px solid #2f5266;
    padding: 12px 18px;
	border-radius: 0;
    text-transform: capitalize;
}
.screenshots-slider .owl-theme .owl-nav [class*="owl-"]:hover {
	color: #5b667d;
	background: #fff;
}
.screenshots-slider .owl-carousel button.owl-dot {
	background-color: #dee5ec;
	display: inline-block;
}
.owl-theme .owl-nav .disabled {
    opacity: 1;
}
.owl-theme .owl-dots .owl-dot span {
    display: none!important;
}
.owl-theme .owl-dots {
    text-align: center!important;
}
</style>