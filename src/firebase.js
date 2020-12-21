

  import firebase from 'firebase';
  const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyA4ukNdeoboyW4IxI_ToXTs_J8EPbqrsNQ",
        authDomain: "todo-app-firebase-af598.firebaseapp.com",
        databaseURL: "https://todo-app-firebase-af598.firebaseio.com",
        projectId: "todo-app-firebase-af598",
        storageBucket: "todo-app-firebase-af598.appspot.com",
        messagingSenderId: "1058016420938",
        appId: "1:1058016420938:web:4b8c33fa64106655dd32b3"
      
  })

  const db = firebaseApp.firestore();
  export default db;