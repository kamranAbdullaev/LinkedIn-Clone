import { firestore } from '../firebaseConfig';
import {addDoc, collection} from 'firebase/firestore'

let dbRef = collection(firestore, "posts")
export const  PostStatus = () => {
    addDoc(dbRef)
}
