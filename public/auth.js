
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAbqUig6o84_5-3dyji_lk7GKRhF-D8LOo",
  authDomain: "fooddeliveryapp-37f38.firebaseapp.com",
  projectId: "fooddeliveryapp-37f38",
  storageBucket: "fooddeliveryapp-37f38.appspot.com",
  messagingSenderId: "203597302732",
  appId: "1:203597302732:web:c474e3fb49f77ee5b56b69"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// auth and fireStore
const auth = firebase.auth();
const dataBase = firebase.firestore();

    // update firestore settings
// dataBase.settings({ timestampsInSnapshots: true });


// signup
const userSignInForm = document.querySelector('#user-signup');
userSignInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info

  const email = userSignInForm['email'].value;
  const password = userSignInForm['password'].value;
  

  // sign up the user & add firestore data
  auth.createUserWithEmailAndPassword(email, password)
  .then(cred => {
   
    console.log(cred.user);
   
  }).then(() => {
   
    userSignInForm.reset();
   
  }).catch(err => {
    // userSignInForm.querySelector('.error').innerHTML = err.message;
  });
});

// login
const userSignIn = document.querySelector('#user-sign-in');
userSignIn.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = userSignIn['login-email'].value;
  const password = userSignIn['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    
    loginForm.reset();
    loginForm.querySelector('.error').innerHTML = '';
  }).catch(err => {
    loginForm.querySelector('.error').innerHTML = err.message;
  });

});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});
