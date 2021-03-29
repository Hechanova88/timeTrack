
		function googleSignInPopup(provider) {
			// [START auth_google_signin_popup]
			firebase.auth()
			  .signInWithPopup(provider)
			  .then((result) => {
				/** @type {firebase.auth.OAuthCredential} */
				var credential = result.credential;
		  
				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = credential.accessToken;
				// The signed-in user info.
				var user = result.user;
				// ...
			  }).catch((error) => {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			  });
			// [END auth_google_signin_popup]
		  }
		  
		  function googleSignInRedirectResult() {
			// [START auth_google_signin_redirect_result]
			firebase.auth()
			  .getRedirectResult()
			  .then((result) => {
				if (result.credential) {
				  /** @type {firebase.auth.OAuthCredential} */
				  var credential = result.credential;
		  
				  // This gives you a Google Access Token. You can use it to access the Google API.
				  var token = credential.accessToken;
				  // ...
				}
				// The signed-in user info.
				var user = result.user;
			  }).catch((error) => {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			  });
			// [END auth_google_signin_redirect_result]
		  }
		  
		  function googleBuildAndSignIn(id_token) {
			// [START auth_google_build_signin]
			// Build Firebase credential with the Google ID token.
			var credential = firebase.auth.GoogleAuthProvider.credential(id_token);
		  
			// Sign in with credential from the Google user.
			firebase.auth().signInWithCredential(credential).catch((error) => {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // The email of the user's account used.
			  var email = error.email;
			  // The firebase.auth.AuthCredential type that was used.
			  var credential = error.credential;
			  // ...
			});
			// [END auth_google_build_signin]
		  }
		  
		  // [START auth_google_callback]
		  function onSignIn(googleUser) {
			console.log('Google Auth Response', googleUser);
			// We need to register an Observer on Firebase Auth to make sure auth is initialized.
			var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
			  unsubscribe();
			  // Check if we are already signed-in Firebase with the correct user.
			  if (!isUserEqual(googleUser, firebaseUser)) {
				// Build Firebase credential with the Google ID token.
				var credential = firebase.auth.GoogleAuthProvider.credential(
					googleUser.getAuthResponse().id_token);
			
				// Sign in with credential from the Google user.
				// [START auth_google_signin_credential]
				firebase.auth().signInWithCredential(credential).catch((error) => {
				  // Handle Errors here.
				  var errorCode = error.code;
				  var errorMessage = error.message;
				  // The email of the user's account used.
				  var email = error.email;
				  // The firebase.auth.AuthCredential type that was used.
				  var credential = error.credential;
				  // ...
				});
				// [END auth_google_signin_credential]
			  } else {
				console.log('User already signed-in Firebase.');
			  }
			});
		  }
		  // [END auth_google_callback]
		  
		  // [START auth_google_checksameuser]
		  function isUserEqual(googleUser, firebaseUser) {
			if (firebaseUser) {
			  var providerData = firebaseUser.providerData;
			  for (var i = 0; i < providerData.length; i++) {
				if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
					providerData[i].uid === googleUser.getBasicProfile().getId()) {
				  // We don't need to reauth the Firebase connection.
				  return true;
				}
			  }
			}
			return false;
		  }
			  ;
		  

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
