// Данные аккаунта firebase
var firebaseConfig = {
  apiKey: "AIzaSyAkiDZiCwpONcuLOINXIJPUHfFSjzyJ0Nw",
    authDomain: "main-9637c.firebaseapp.com",
    databaseURL: "https://main-9637c.firebaseio.com",
    projectId: "main-9637c",
    storageBucket: "main-9637c.appspot.com",
    messagingSenderId: "102352000930",
    appId: "1:102352000930:web:288fa63262961e3bf304fb",
    measurementId: "G-T2YS2MT1TN"
};
firebase.initializeApp(firebaseConfig);


var messagesRef = firebase.database().ref("messages");

document.getElementById("contactForm").addEventListener("submit", submitForm);

//Отправка формы
function submitForm(e) {
  e.preventDefault();
  // Получаем значения
  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  saveMessage(name, company, email, phone, message);
    
  //Появление сообщения об отправке
  document.querySelector(".alert").style.display = "block";

  //Скрыть сообщение

  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //Очистить форму
  document.getElementById("contactForm").reset();
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

// Сохранить сообщение в базе данных
function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
