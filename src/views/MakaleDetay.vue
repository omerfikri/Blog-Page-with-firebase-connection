<template>
  <h1>Makale Detay</h1>
  <br />
  <div v-if="hatalar">
    {{ hatalar }}
  </div>
  <div v-if="makale" class="detay content">
    <h2><i>Makale Başlık:</i> {{ makale.baslik }}</h2>
    <div class="content">
      <i>Makale İçerik:</i>
      <p>{{ makale.icerik }}</p>
    </div>
    <div class="content">
      <i>Oluşturulma Tarihi:</i>
      <p>{{ makale.olusturulmaTarihi }}</p>
    </div>
    <a class="sil" @click="makaleSil">
      <img src="/trashcan.svg" alt="makale sil" />
    </a>
  </div>
  <div v-else>Yükleniyor...</div>
</template>

<script>
  import { useRoute, useRouter } from "vue-router";
  import { ref } from "vue";
  import makaleGetir from "../composables/makaleGetir";
  import { db } from "../firebase/config";
  import { doc, deleteDoc } from "firebase/firestore";

  export default {
    props: ["id"],
    setup() {
      const route = useRoute();
      const router = useRouter();
      const id = ref(route.params.id);

      const { makale, hatalar, makaleYukle } = makaleGetir(route.params.id);

      makaleYukle();

      const makaleSil = async () => {
        try {
          await deleteDoc(doc(db, "makaleler", route.params.id)).then(() => {
            router.push("/");
          });
          console.log("Makale başarıyla silindi.");
        } catch (error) {
          console.error("Makale silinirken bir hata oluştu:", error);
        }
      };

      return { makale, hatalar, makaleSil };
    },
  };
</script>

<style scoped>
  .detay {
    position: relative;
  }
  .content {
    margin-bottom: 30px;
  }
  .sil {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    padding: 8px;
    cursor: pointer;
  }
</style>
