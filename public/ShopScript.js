var firstImage = document.getElementById("image1");
var secImage = document.getElementById("image2");
var thirdImage = document.getElementById("image3");

var counter = 0;
var count = null;
function btnPrev(){
	counter++;
	if(counter === 1){
		firstImage.style.display = "none";
		secImage.style.display = "none";
		thirdImage.style.display = "block";
	}
	if(counter === 2){
		firstImage.style.display = "none";
		secImage.style.display = "block";
		thirdImage.style.display = "none";
	}	
	if(counter === 3){
		firstImage.style.display = "block";
		secImage.style.display = "none";
		thirdImage.style.display = "none";
		counter = 0;
		count = null;
	}
}

function btnNext(){
	counter++;
	if(counter === 1){
		firstImage.style.display = "none";
		secImage.style.display = "block";
		thirdImage.style.display = "none";
	}
	if(counter === 2){
		firstImage.style.display = "none";
		secImage.style.display = "none";
		thirdImage.style.display = "block";
	}	
	if(counter === 3){
		firstImage.style.display = "block";
		secImage.style.display = "none";
		thirdImage.style.display = "none";
		counter = 0;
		count = null;
	}
}

const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const searchElements = document.querySelector(".searchElements");
const searchInput = document.getElementById('mySearch').value;
const textElements = document.getElementsByClassName('text');



icon.onclick = function() {
	search.classList.toggle("active");
}

var heels1 = document.getElementById('heels1');
var heels2 = document.getElementById('heels2');
var heels3 = document.getElementById('heels3');
var fructis = document.getElementById('fructis');
var dress = document.getElementById('dress');
var necklace1 = document.getElementById('necklace1');
var necklace2 = document.getElementById('necklace2');
var libby = document.getElementById('libby');
var daniela = document.getElementById('daniela');
var picture = document.getElementById('picture');

var burger = document.getElementById("burger");
var getBurgerElements = document.getElementById("getBurgerElements");
var menu = document.getElementById("menu");

var getCount = 0;
var getCountNull = null;


function burgersMenu() {
  getCount++;
  if (getCount === 1) {
    search.style.display = "none";
    getBurgerElements.style.display = "inline-block";
    burger.style.marginTop = "-32px";
    burger.style.marginLeft = "-85%";
    getCountNull = getCount;
    getCountNull = null;
  }
  if (getCount === 2) {
    search.style.display = "block";
    getBurgerElements.style.display = "none";
    burger.style.display = "inline-block";
    burger.style.marginTop = "-32px"; 
    burger.style.marginLeft = "0px"; 
    getCountNull = getCount;
    getCountNull = null;
    getCount = 0;
  }
}

var getNull = null;
var countCard = 0;
var holder = document.getElementById("holder");
var getPopular = document.getElementById("getPopular");
var mE22 = document.getElementById("mE22");

function bankCard() {
	countCard++;
	if(countCard === 1) {
		holder.style.display = "none";
		getPopular.style.display = "none";
		mE22.style.display = "block";
		mE22.style.width = "60%";
		mE22.style.marginTop = "68px";
		burger.style.display = "none";
		getBurgerElements.style.display = "none";
		getNull = null;
		countCard = 0;
	}
	
}

var giveUp = document.getElementById("giveUp");
var backOnPrevPage = 0;
var backPrev = null;

function backPrevPage() {
	backOnPrevPage++;
	if(backOnPrevPage === 1) {
		holder.style.display = "block";
		getPopular.style.display = "block";
		mE22.style.display = "none";
		search.style.display = "block";
		burger.style.display = "inline-block";
		burger.style.marginLeft = "0px";
		
		backPrev = null;
	}
	backOnPrevPage = 0;
}

//validation of cards

function payArticles() {
	var nameValue = document.getElementById('name');
	var lastNameValue = document.getElementById('lastName');
	var numberCard = document.getElementById('numberCard');
	var expirationDate = document.getElementById('expirationDate');
	var cvcCode = document.getElementById('cvcCode');
	var checkboxValue = document.getElementById("check");
	
	var error_name = document.getElementById("error_name");
	var error_lastName = document.getElementById("error_lastName");
	var error_card = document.getElementById("error_card");
	var error_date = document.getElementById("error_date");
	var error_cvcCode = document.getElementById("error_cvcCode");
	var error_checkbox = document.getElementById("error_checkbox");
	
	var validationCard = document.getElementById("cardIsAccepted");
	
	
	//name validation
	
	if (nameValue.value.length < 3 || nameValue.value.length > 20) {
		nameValue.className = "nameFirst error_input";
		error_name.innerHTML = "Your name has to have more than 3 letters and less than 20!";
		nameValue.style.border = "1px solid red";
		nameValue.style.color = "red";
	} else {
		nameValue.className = "nameFirst";
		error_name.innerHTML = "";
		nameValue.style.border = "1px solid black";
		nameValue.style.color = "black";
	}
	
	//last name validation
	
	if (lastNameValue.value.length < 3 || lastNameValue.value.length > 20) {
		lastNameValue.className = "lastName error_inputLast";
		error_lastName.innerHTML = "Your name has to have more than 3 letters and less than 20!";
		lastNameValue.style.border = "1px solid red";
		lastNameValue.style.color = "red";
	} else {
		lastNameValue.className = "lastName";
		error_lastName.innerHTML = "";
		lastNameValue.style.border = "1px solid black";
		lastNameValue.style.color = "black";
	}
	
	//card number validation

	if (numberCard.value.length < 10 || numberCard.value.length > 10) {
		numberCard.className = "numberCard error_inputCard";
		error_card.innerHTML = "Your card number has to have 10 numbers!";
		numberCard.style.border = "1px solid red";
		numberCard.style.color = "red";
	} else {
		numberCard.className = "numberCard";
		error_card.innerHTML = "";
		numberCard.style.border = "1px solid black";
		numberCard.style.color = "black";
	}
	
	//expiration date validation
	
	if (expirationDate.value.length < 4 || expirationDate.value.length > 4) {
		expirationDate.className = "expirationDate error_inputDate";
		error_date.innerHTML = "Your expiration date has to have 4 numbers!";
		expirationDate.style.border = "1px solid red";
		expirationDate.style.color = "red";
	} else {
		expirationDate.className = "expirationDate";
		error_date.innerHTML = "";
		expirationDate.style.border = "1px solid black";
		expirationDate.style.color = "black";
	}

	//cvc validation

	if (cvcCode.value.length < 3 || cvcCode.value.length > 3) {
		cvcCode.className = "cvcCode error_inputCvc";
		error_cvcCode.innerHTML = "Your CVC has to have 4 numbers!";
		cvcCode.style.border = "1px solid red";
		cvcCode.style.color = "red";
	} else {
		cvcCode.className = "cvcCode";
		error_cvcCode.innerHTML = "";
		cvcCode.style.border = "1px solid black";
		cvcCode.style.color = "black";
	}
	
	//checkbox validation
	
	if (!checkboxValue.checked) {
		error_checkbox.innerHTML = "You have to agree to continue!";
		error_checkbox.style.color = "red";
	} else {
		error_checkbox.innerHTML = "";
	}
	
	
	

	
}
		
