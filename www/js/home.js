/*toggle for primary nav*/
document.getElementById("drop-menu").onclick = function() {
    var mNav = document.getElementById("main-nav");
    if (mNav.style.display == "none") {
        mNav.style.display = "flex";
    }else {
        mNav.style.display = "none";
    }
}

var contactButton = document.getElementById('send-btn');
var messageArea1 = document.getElementById("message-box1");
var messageArea2 = document.getElementById("message-box2");
var messageArea3 = document.getElementById("message-box3");
contactButton.onclick = function() {
    var fName = document.getElementById('first-name').value;
    var lName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    alert("Gracias");
    messageArea1.innerHTML = "Name: " + fName + " " + lName;
    messageArea2.innerHTML = "Email: " + email;
    messageArea3.innerHTML = "Message: " + message;
}
