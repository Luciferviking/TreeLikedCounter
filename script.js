//goals
//counter
//like //dislike
//adding new accounts

var noLikes = 0;
var display = document.getElementById("display");

var displayValue = (x) => {
	return display.value = x;
}

function click(){
	noLikes += 1;
	displayValue(noLikes);
}

function unClick(){
	noLikes -= 1;
	displayValue(noLikes);
}

var grabElement = (element) => {
	var elementCont = document.getElementById(element);
	return elementCont;
}

function likeClicked(valueElement){
	var cont =grabElement(valueElement);
	var dis = cont.value;
	if (dis == 0) {
		click();
		dis += 1;
	}
	else{
		unClick();
		dis -= 1;
	}
	cont.value = dis;
}

var devView = grabElement('devView');
var forDevView = 0;

function showDevView(){
	var unpolished = grabElement('unpolished');
	if (forDevView == 0) {
		unpolished.style.display = "block";
		forDevView += 1;
	}
	else{
		unpolished.style.display = "none";	
		forDevView -= 1;
	}
}
devView.addEventListener("click", showDevView);