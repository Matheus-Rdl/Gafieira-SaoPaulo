// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPd7BAAjfVF_SJF3VOcErqjiDcTyHGUAw",
  authDomain: "gafieirasaopaulo.firebaseapp.com",
  projectId: "gafieirasaopaulo",
  storageBucket: "gafieirasaopaulo.firebasestorage.app",
  messagingSenderId: "916546271675",
  appId: "1:916546271675:web:cd11875724b72586b46c9e",
  measurementId: "G-GYH7T5GH7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore(app);

const eventsCollection = collection(db, "events");

getDocs(eventsCollection).then((snapshot) =>{
    snapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        renderEvent(doc);
    });
});

const eventList = document.querySelector("#agenda-list");

function renderEvent(doc){
    
    let div = document.createElement('div');
    let name = document.createElement('h5');
    let description = document.createElement('p');
    let local = document.createElement('p');

    name.textContent = doc.data().name;
    description.textContent = doc.data().description;
    local.textContent = doc.data().local;

    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(local);
    
    eventList.appendChild(div);
}
