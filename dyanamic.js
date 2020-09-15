/*function getJson(file,callback) {
    var xhr = newXMLHttpRequest();
    xhr.overrideMineType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == "200") {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}
getJson("data.json",function(text) {
    var d = JSON.parse(text);
    console.log(d);
});
fetch("data.json", function((text)=>{
    return response.json();
})
.then((d)=>{
console.log("fetch API");
console.log(d);
})*/
fetch("data.json")
.then((pavithra)=>{
return pavithra.json();
})
.then((data)=>{
    console.log("fetch API");
    console.log(data);
});
var main=document.getElementryById("main");
console.log(main);
var cardViewName =document.createElement("h1");
cardViewName.textContent="Card View";
main.appendChild(cardViewName);
var section=document.createElement("section");
section.classList.add("card")
section.setAttribute("class","card");
var image=document.createElement("img");
image.src="Profile1.png";
image.alt="Profile image";
section.appendChild(image);
var name=document.createElement("h2");
name.textContent="Pavithra";
section.appendChild(name);
main.appendChild(section);
