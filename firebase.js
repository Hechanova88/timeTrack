// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyD-DBBqcmv8pE2MwuCa1kESmatCxDZSOT4",
    authDomain: "auth-development-a310b.firebaseapp.com",
    projectId: "auth-development-a310b",
    storageBucket: "auth-development-a310b.appspot.com",
    messagingSenderId: "487757847348",
    appId: "1:487757847348:web:3b8d304a110b9a8cab2361"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}

	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page
      location.href="Sidebar.html"

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}

	});
