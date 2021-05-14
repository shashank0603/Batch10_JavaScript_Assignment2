function getById(){
    console.log("Get by ID")
    var x = document.getElementById("demo");
    console.log(x);
    x.textContent = "this content was changed";
    x.style.color="red";
}
function getByClass(){
    console.log("Get by Class")
    var x = document.getElementsByClassName("test")
    console.log(x);
    for(const key in x){
        console.log(x[key]);
        x[key].style.background = "grey"
    }
}
function getByTagName(){
    console.log("Get by Tag Name");
    var x= document.getElementsByTagName("p");
    console.log(x);
    for(const key in x){
        console.log(x[key]);
        x[key].style.background = "yellow";
    }
}
function getQSelector(){
    console.log("Get by Query")
    var x = document.querySelector("p");
    console.log(x);
}
function getQSelectorAll(){
    console.log("Get All Query");
    var x = document.querySelectorAll("p");
    console.log(x);
}