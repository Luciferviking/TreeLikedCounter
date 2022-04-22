//goals
//counter
//like //dislike
//adding new accounts

var likes = 0;
var displayCont = document.getElementById("displayLikes");

var displayLikes = (x) => {
	return displayCont.value = x;
}

function like(){
	likes += 1;
	displayLikes(likes);
}

function dislike(){
	likes -= 1;
	displayLikes(likes);
}

function liked(storeValue, button){
	var cont = grabElement(storeValue);
	var btn = grabElement(button);
	var dis = cont.value;
	if (dis == 0) {
		like();
		dis += 1;
		btn.innnerText = "Liked";
		btn.style.color = "red";
	}
	else{
		dislike();
		dis -= 1;
		btn.innnerText = "Like";
		btn.style.color = "black";
	}
	cont.value = dis;
}