import {signInWithEmailAndPassword, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig';

// Вход
export const  LoginAPI = (email, password) => {

  try {
    let res = signInWithEmailAndPassword(auth, email, password)
    return res;
  }catch(err){
   return err
  }
};

// Регистрация 
export const  RegisterAPI = (email, password) => {
  try {
    let res = createUserWithEmailAndPassword(auth, email, password)
    return res;
  }catch(err){
   return err
  }
};

// Вход с помощью Гугла
 export const  GoogleSigInAPI = () => {
  try {
    let googleProvider = new GoogleAuthProvider();
    let res = signInWithPopup(auth, googleProvider)
    return res;
  }catch(err){
   return err
  }
};

// Выход

export const onLogout = () => {
  try {
    signOut(auth)
  } catch (err) {
    return err
  }
}