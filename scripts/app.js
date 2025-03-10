// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
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
const events = query(eventsCollection, orderBy("date_order"));

getDocs(events).then((snapshot) =>{
    snapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        //console.log(doc.id, " => ", doc.data().date);
        //console.log(doc.id, " => ", doc.data().tags);
        //let tagText = ""
        //for (let x of (doc.id, " => ", doc.data().tags)) {
        //    tagText += x + " + "
        //}
        //tagText = tagText.slice(0, -2)
        //console.log(tagText)
        console.log(doc.id, " => ", doc.data().url)
        renderEvent(doc);
    });
});

const eventList = document.querySelector("#agenda-list");

function renderEvent(doc){
    
    //cria os elementos em html
    let div = document.createElement('div');
    let span = document.createElement('span');
    let name = document.createElement('h5');
    let date_tag = document.createElement('p')
    let time = document.createElement('p')
    let description = document.createElement('p');
    let local = document.createElement('p');
    let img = document.createElement('img');
    
    
    //pega os dados do banco
    name.textContent = doc.data().name;
    
    let tagText = ""
    for (let x of (doc.data().tags)){
        tagText += x + " + "
    }
    tagText = tagText.slice(0, -2)
    
    let date = doc.data().date;
    date_tag.innerHTML = `<p><strong>${date}</strong> • ${tagText}</p>`;
    description.textContent = doc.data().description;
    
    let startTime = doc.data().time_start;
    let endTime = doc.data().time_end;

    time.textContent = `${startTime} ás ${endTime}`

    local.textContent = doc.data().local;

    img.src = doc.data().url; 
    
    //coloca os texteo no html
    span.appendChild(name);
    span.appendChild(date_tag);
    (doc.data().description.trim() && span.appendChild(description));
    (startTime.trim() || endTime.trim()) && span.appendChild(time);
    span.appendChild(local);
    div.appendChild(span);
    div.appendChild(img)
    
    eventList.appendChild(div);
}
