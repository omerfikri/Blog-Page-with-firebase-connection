<template>
  <div>
    <div v-if="hatalar">
      {{ hatalar }}
    </div>
    <div v-else-if="makaleler.length">
      <MakaleListesi :makaleler="makaleler" />
    </div>
    <div v-else>Yükleniyor...</div>
  </div>
</template>

<script>
  import MakaleListesi from "../components/MakaleListesi.vue";
  import makalelerGetir from "../composables/makalelerGetir";

  export default {
    name: "Home",
    components: {
      MakaleListesi,
    },
    setup() {
      const { makaleler, hatalar, makaleListesiniYukle } = makalelerGetir();
      //console.log(makaleler);
      makaleListesiniYukle();

      return { makaleler, hatalar };
    },
  };
</script>
