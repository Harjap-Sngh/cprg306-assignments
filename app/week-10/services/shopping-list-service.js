import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId){
    const items = [];
    const itemsRef = collection(db, `users/${userId}/items`);
    const querySnapshot = await getDocs(itemsRef);
    querySnapshot.forEach((doc) => {
        items.push({...doc.data(), id: doc.id});
    });
    return items;
}



export async function addItemFirebase(userId, item){
    const itemsRef = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
}
