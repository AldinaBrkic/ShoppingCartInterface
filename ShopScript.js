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


function burgersMenu(){
	getCount++;
	if(getCount === 1) {
		search.style.display = "none";
		getBurgerElements.style.display = "inline-block";
		burger.style.marginTop =  '-32px';
		burger.style.marginLeft =  '-84%';
	}
	if(getCount === 2) {
		search.style.display = "inline-block";
		getBurgerElements.style.display = "none";
		burger.style.marginTop =  '0px';
		burger.style.marginLeft =  '8px';
		searchElements.style.paddingLeft = "28%";
		getCount = 0;
			getCountNull = null;
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
		mE22.style.width = "46%";
		burger.style.marginTop = "-368px";
		burger.style.marginLeft = "25%";
	}
	if(countCard === 2) {
		holder.style.display = "block";
		getPopular.style.display = "block";
		mE22.style.display = "none";
	}
}
