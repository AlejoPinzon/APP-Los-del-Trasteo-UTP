<template>
  <h2 class="section-heading"><span>{{titleInner}}</span> {{ title }}</h2>
</template>

<script>
export default {
  name: 'SectionHeading2',
  props: {
    title: String,
    titleInner: String
  }
}
</script>