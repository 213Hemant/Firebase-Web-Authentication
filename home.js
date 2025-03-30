import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const auth = getAuth();

document.getElementById('logout').addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      window.location.href = "signin.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
