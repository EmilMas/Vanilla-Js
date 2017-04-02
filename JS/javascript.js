var myHeadline = document.querySelector("#headline");
var myButton = document.querySelector("#button");
var myList = document.querySelector("#item-list");
var ItemCounter = 1;
var listItems = document.querySelectorAll("#item-list li");

myList.addEventListener("click", enableItem);

function enableItem(e){
if (e.target.nodeName == "LI") {
    myHeadline.innerHTML = e.target.innerHTML;
    for(i = 0; i < e.target.parentNode.children.length; i++){
    e.target.parentNode.children[i].classList.remove("active");
}   
}
    e.target.classList.add("active")
}

myButton.addEventListener("click", createNewItem);

function createNewItem(){
    myList.innerHTML += "<li>A New Item " + ItemCounter + "</li>";
    ItemCounter++;
}