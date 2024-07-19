
// import { initializeApp } from "firebase/app";
// import {
//     createUserWithEmailAndPassword,
//     getAuth,
//     signInWithEmailAndPassword,
//     signOut
// } from "firebase/auth";
// import {
//     addDoc,
//     collection,
//     getFirestore
// } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBpy7ESklgnOFvHfNNMz4FlyY96sBIbZNU",
//   authDomain: "netflix-clone-a4203.firebaseapp.com",
//   projectId: "netflix-clone-a4203",
//   storageBucket: "netflix-clone-a4203.appspot.com",
//   messagingSenderId: "857419019716",
//   appId: "1:857419019716:web:61df3caf33b7ffca9d2091"
// };


// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const db = getFirestore(app);

// const signup = async (name, email, password)=>{
//     try {
//         const res = await createUserWithEmailAndPassword(auth, email, password );
//         const user = res.user;
//         await addDoc(collection(db, "user"), {
//             uid: user.uid,
//             name,
//             authProvider: "local",
//             email,
//         });
//     } catch (error) {
//         console.log(error);
//         alert(error);
//     }

// }

// const login = async(email, password)=>{
//     try {
//         await signInWithEmailAndPassword(auth, email, password)
//     } catch (error) {
//         console.log(error);
//         alert(error);
//     }

// }

// const logout = ()=>{
//     signOut(auth);
// }

// export { auth, db, login, logout, signup };
