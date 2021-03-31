const userId = document.getElementById('userId');
const userEmail = document.getElementById('userEmail');
const userMesage = document.getElementById('userMessage');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn'); 
const removeBtn = document.getElementById('removeBtn'); 

const database = firebase.database();

addBtn.addEventListener('click',(e) => {
  e.preventDefault();
  database.ref('/users/'+ userId.value).set({
    user_id: userEmail.value,
    user_message: userMessage.value,
  })
});