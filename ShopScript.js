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
