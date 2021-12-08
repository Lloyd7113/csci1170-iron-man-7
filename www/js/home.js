<<<<<<< HEAD
<<<<<<< HEAD

=======
let orderButton = document.getElementById("place-order")
orderButton.addEventListener("click", submit)

function submit(){
    console.log("start of function")
    let goodSubmission = true
    let content = {
        mainItem: document.getElementById("main-item").value,
        sideItem: document.getElementById("side-item").value,
        desertItem: document.getElementById("desert").value
    }
    console.log(JSON.stringify(content))

    let nullCount = 0
    for(let conKey in content){
	
	if(content[conKey].length == 0){
	    nullCount++
        }
	else{

    if(!verifyInput(conKey)){
      goodSubmission = false
    }
	}
    }

    if(goodSubmission && nullCount<3){

        let newSection = document.createElement("section")
        let sectionHeader = document.createElement("h3")
        sectionHeader.innerHTML = "Order Summary:"
        newSection.appendChild(sectionHeader)

        let newUl = document.createElement("ul")
        for(key in content){
	    if(content[key].length > 0){
                let newLi = document.createElement("li")
                newLi.innerHTML = content[key]
                newUl.appendChild(newLi)
	    }
        }

        newSection.appendChild(newUl)
        mainElement = document.getElementById("pg-main-content")
	mainElement.appendChild(newSection)
    }
    else {

	console.log("Invalid entry!")
	console.log(content)
    }
    
    function verifyInput(contentKey){

        let menuItems = {
                Item1: "Beef Tacos",
                Item2: "Chicken Tacos",
                Item3: "King Taco",
                Item4: "Cheese Nachos",
                Item5: "Cheese and Bacon Nachos",
                Item6: "Works Nachos",
                Item7: "Tortillas",
                Item8: "Chimichangas",
                Item9: "Burritos"
        }

        let isMenuItem = false
    
        for(key in menuItems){

            if(content[contentKey] == menuItems[key]){
                isMenuItem = true
            }	
        }

        return isMenuItem
    }
}
>>>>>>> peter-altenkirk
=======
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
>>>>>>> tyson-semchyshen
