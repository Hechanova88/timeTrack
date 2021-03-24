(function()){
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeALhV9jR884SMo5AOfHfSYmXcFlAiCEo",
    authDomain: "timetrack-4d7f6.firebaseapp.com",
    databaseURL: "https://timetrack-4d7f6-default-rtdb.firebaseio.com",
    projectId: "timetrack-4d7f6",
    storageBucket: "timetrack-4d7f6.appspot.com",
    messagingSenderId: "796459951357",
    appId: "1:796459951357:web:930318c50c8846b92d0a94",
    measurementId: "G-HF84FKMBHD"
  };
  firebaseConfig.intializeApp(config);
    // Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPasssword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignup = document.getElementById('btnSignup');
    const btnLogout = document.getElementById('btnLogout');

//add login
btnLogin.addEventListener('click', e=> {

    const email = txtEmail.nodeValue;
    const pass = txtPassword.nodeValue;
    const auth = firebase.auth();
})


  //Sign in
  const promise = auth.signInWithEmailAndPasword(email, pass);
  promise.catche(e=> console.log(e.message));
};
  