import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const auth = getAuth();

document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successfully signed up
      alert("Signup successful!");
      window.location.href = "signin.html"; // Redirect to signin page
    })
    .catch((error) => {
      alert(error.message);
    });
});
