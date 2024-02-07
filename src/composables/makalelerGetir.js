import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const makalelerGetir = () => {
  const makaleler = ref([]);
  const hatalar = ref(null);

  const makaleListesiniYukle = async () => {
   try {
      const q = query(
        collection(db, "makaleler"),
        orderBy("olusturulmaTarihi", "desc")
      );
      const querySnapshot = await getDocs(q);

      makaleler.value = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    } catch (error) {
      hatalar.value = error.message;
      console.log("Hata");
    }
  };

  return { makaleler, hatalar, makaleListesiniYukle };
};

export default makalelerGetir;
