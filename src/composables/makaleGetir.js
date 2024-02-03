import { ref } from "vue";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import moment from "moment";
import "moment/locale/tr";

const makaleGetir = (id) => {
  const makale = ref(null);
  const hatalar = ref(null);

  const makaleYukle = async () => {
    try {
      const docRef = doc(db, "makaleler", id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        throw Error("Makale Bulunamadı");
      }

      const tarih = docSnap.data().olusturulmaTarihi;
      const formatlanmisTarih = moment
        .unix(tarih.seconds)
        .locale("tr")
        .format("LLL");
      console.log(formatlanmisTarih);

      makale.value = {
        ...docSnap.data(),
        id: docSnap.id,
        olusturulmaTarihi: formatlanmisTarih,
      };
    } catch (error) {
      hatalar.value = error.message;
    }
  };

  return { makale, hatalar, makaleYukle };
};

export default makaleGetir;
