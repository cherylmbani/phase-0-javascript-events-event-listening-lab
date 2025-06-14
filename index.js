// function addingEventListener() {
    //alert(" I was clicked");

//}
//const input = document.getElementById("button");
//input.addEventListener("click", addingEventListener);

//Most important point is the code creating an event listener should be inside the function
function addingEventListener(){
    const input = document.getElementById("button");
    input.addEventListener("click", function(){
        alert("I was clicked");
    });   
}
addingEventListener();