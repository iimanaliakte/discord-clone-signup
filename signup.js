var firebaseConfig = {
    apiKey: "AIzaSyDjAJcPaP8lAr-uhzlvNFzN_dQDb79Yc2Y",
    authDomain: "clonecord-c5b8e.firebaseapp.com",
    projectId: "clonecord-c5b8e",
    storageBucket: "clonecord-c5b8e.appspot.com",
    messagingSenderId: "43216213551",
    appId: "1:43216213551:web:ca0edf3d0ca005c77358da",
    measurementId: "G-F3R3FX41BK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


const txtEmail = document.querySelector('#emailinput');
const txtUsername = document.querySelector('#usernameinput');
const txtPassword = document.querySelector('#passwordinput');
const CreateButton = document.querySelector('#createbtn');


const auth = firebase.auth();
const db = firebase.firestore();

CreateButton.addEventListener('click', e =>{
    const email = txtEmail.value;
    const username = txtUsername.value;
    const password = txtPassword.value;

    const promise = auth.createUserWithEmailAndPassword(email,password);

    promise
        .then(async user =>{
            // let fetch1 = await user;
            // let fetch2 = await fetch1.user;
            // let finalfetch = await fetch2.displayName;
            // fetch2.set({
            //     displayName:username,
            // })
            // finalfetch = username;
        })
        .catch(error => {
            // if(error === "Error: The email address is badly formatted."){
            //     alert('Put an actuall email');
            // }
            // console.log('error'  + error);
            alert(error);
        });
})
auth.onAuthStateChanged(async user =>{
    if(user){
        const username = txtUsername.value;
        let uid = user.uid
        console.log(uid);
        user.updateProfile({
            displayName: username,
            photoURL: "https://i.redd.it/y3wduhwn4gd61.jpg"
          }).then(() => {
            alert('Account Created Succesfully ')
            window.location.href = '../html/mainhome.html'
          }).catch((error) => {
            // An error occurred
            // ...
            console.log(error);
          });  
          
    }else{
        console.log('NO');
    }
});