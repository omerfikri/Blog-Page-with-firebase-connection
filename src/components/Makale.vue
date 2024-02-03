<template>
  <div class="makale">
    <router-link :to="{ name: 'Detay', params: { id: makale.id } }"
      ><h3>{{ makale.baslik }}</h3></router-link
    >
  </div>
</template>

<script>
  export default {
    props: ["makale"],
    setup(props) {},
  };
</script>

<style scoped>
  .makale a {
    display: block;
    margin: 40px 0;
    padding: 20px;
    border-left: 6px solid #eb4d4b;
    cursor: pointer;
  }

  .makale a:hover h3 {
    color: #eb4d4b;
  }
</style>
