//set count
if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}
for (var i = 1; i <= localStorage.getItem("count"); i++) {
		var span = document.createElement('span');
		span.innerHTML = '<img src="coffee.jpg">';
		var body2 = document.getElementsByTagName('body2')[0];
		body2.appendChild(span);
	}

//update count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

update();

//add one to count
function plusOne() {
	localStorage.setItem("count", (Number(localStorage.getItem("count")) + 1));	

	update();
	location.reload();
}

//reset count
function reset() {
	if (confirm("Are you sure you want to reset?")) {
    	localStorage.setItem("count",0);
		update();
		location.reload();
	}
}

//function addimage(){

//}

