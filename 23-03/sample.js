var myGlobal = 15;

function funTime() {
	awwGlobal = 3;
}


function funPart() {
	var output = "";
	if (typeof myGlobal != "undefined") {
		output += "myGlobal: " + myGlobal;
	}
	if (typeof awwGlobal != "undefined") {
		output += " awwGlobal: " + awwGlobal;
	}
	console.log(output);
}
funTime();
funPart();