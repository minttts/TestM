function clickb(writeBox){
	document.getElementById("writeBox").innerHTML = document.getElementById("writeBox").innerHTML + writeBox;
}

function del(){
	var txt = document.getElementById("writeBox").innerHTML;
	var txtlent = document.getElementById("writeBox").innerHTML.length;
	document.getElementById("writeBox").innerHTML = txt.substring( 0, txtlent - 1);
}

// function cap(){
	
// }

function tab(){
	document.getElementById("writeBox").innerHTML = document.getElementById("writeBox").innerHTML + "&emsp;&emsp;";
}

function ent(){
	document.getElementById("writeBox").innerHTML = document.getElementById("writeBox").innerHTML + "\n";
}


function clr(){
	document.getElementById("writeBox").innerHTML = "";
}


function spb(){
	document.getElementById("writeBox").innerHTML = document.getElementById("writeBox").innerHTML + "&nbsp;";
}