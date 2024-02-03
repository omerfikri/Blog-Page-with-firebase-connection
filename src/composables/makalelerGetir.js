import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, getDocs, orderBy } from "firebase/firestore";

const makalelerGetir = () => {
  const makaleler = ref([]);
  const hatalar = ref(null);

  const makaleListesiniYukle = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "makaleler"),
        orderBy("olusturulmaTarihi", "desc")
      );

      console.log(querySnapshot.docs);

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
