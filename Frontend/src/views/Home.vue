<template>
  <div class="home" id="list-of-sections">
    <Header />
    <Header_banner />
    <Servicios />
    <Servicios_Acordeon />
    <news />
    <Team />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/home/Header.vue'
import Header_banner from '../components/home/Header_banner.vue'
import Servicios from '../components/home/Servicios.vue'
import Team from '../components/home/Team.vue'
import Servicios_Acordeon from '../components/home/Servicios_Acordeon.vue'
import news from '../components/home/news.vue'
import Footer from '../components/home/Footer.vue'

export default {
  name: 'Home1',
  components: {
    Header,
    Header_banner,
    Servicios,
    Team,
    Servicios_Acordeon,
    news,
    Footer
  }
}
</script>
