<template>
  <div class="makale-listesi">
    <div v-for="makale in makaleler" :key="makale.id">
      <Makale :makale="makale" />
    </div>
  </div>
</template>

<script>
  import Makale from "./Makale.vue";
  export default {
    props: ["makaleler"],
    components: {
      Makale,
    },
    setup(props) {
      // console.log(props.makaleler);
    },
  };
</script>

<style scoped>
  .makale-listesi {
    margin-left: 120px !important;
  }
</style>
