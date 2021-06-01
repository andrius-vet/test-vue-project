import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
apiKey: "AIzaSyAmDmAzkfMCzpU08rl2lLV2O2l4obmM_3M",
    authDomain: "vue-course-3d85d.firebaseapp.com",
    projectId: "vue-course-3d85d",
    storageBucket: "vue-course-3d85d.appspot.com",
    messagingSenderId: "222392218890",
    appId: "1:222392218890:web:e591b33bc067531107b6f3"
};
    
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;