import { firestore } from '../firebaseConfig';
import {addDoc, collection, onSnapshot, doc, updateDoc} from 'firebase/firestore'
import { toast } from 'react-toastify';

// Постим в базу
let dbRef = collection(firestore, "posts")
let userRef = collection(firestore, "users")


export const  PostStatus = (object) => {
    addDoc(dbRef, object)
    .then(() => {
        toast.success("Post has been added successfully!");
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
// Постим данные после регистрации
export const postUserData = (object) => {
        addDoc(userRef, object)
    .then(() => {})
    .catch((err) => {
       toast.error(err.message)
    })
}

// Получаем данные о пользователе
export const getCurrentUser = async (setCurrentUser) => {
    await onSnapshot(userRef, (res) => {
        setCurrentUser(res.docs.map((docs) => {
            return { ...docs.data(), userID: docs.id }
        }).filter((item) => {
            return item.email === localStorage.getItem('userEmail');
            
        })[0]
        );
    });
};
// Изменение данных и отправка 
export const editProfile = (userID, payLoad) => {
    let userToEdit = doc(userRef, userID);
    updateDoc(userToEdit, payLoad)
    .then(() => {
        toast.success("Profile has been updated successfully!");
    })
    .catch((err) => {
       toast.error(err.message)
    })

};

