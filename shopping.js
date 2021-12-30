var button = document.getElementById("enter")
var textarea = document.getElementById("userinput")
var ul = document.querySelector("ul")



function click(){
	if(textarea.value.length>0){
		createListelement()
	}
}

function press(event){
	if(textarea.value.length>0  && event.code === "Enter"){
		createListelement()
		
	}
}

function createListelement(){
	var div = document.createElement("div")
	var li = document.createElement("li")
	var delbutton = document.createElement("button")
	div.classList.add("wrapper")
	li.appendChild(document.createTextNode(textarea.value))
	ul.appendChild(div)
	div.append(li, delbutton)
	li.classList.add("taskclass")
	delbutton.classList.add("delclass")
	textarea.value =""
	delbutton.innerHTML ="clear";
}
function dellist(element){
	if (element.target.className === "delclass"){
		element.target.parentElement.remove();
	}
}
function donetask(e) {
	if (e.target.tagName === "LI"){
		e.target.classList.toggle("cross");
	}
}
function handleulclick(element){
	donetask(element);
	dellist(element);
}
ul.addEventListener("click",handleulclick)
button.addEventListener("click",click)
textarea.addEventListener("keypress", press)

