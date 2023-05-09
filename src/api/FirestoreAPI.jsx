import { firestore } from '../firebaseConfig';
import {addDoc, collection, onSnapshot} from 'firebase/firestore'
import { toast } from 'react-toastify';

// Постим в базу
let dbRef = collection(firestore, "posts")

export const  PostStatus = (object) => {

    addDoc(dbRef, object)
    .then(() => {
        toast.success("Document has been added successfully!");
    })
    .catch((err) => {
       toast.error(err.message)
    })
}

//Получаем данные с базы!
export const getStatus = (setAllStatus) => {
    onSnapshot(dbRef, (res) => {
        setAllStatus(res.docs.map((docs) => {
            return {...docs.data(), id: docs.id}
        }));
    })
}

