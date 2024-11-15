let heading=document.getElementById("heading")
console.dir(heading)
 

let heading2=document.getElementsByClassName("heading2")
console.dir(heading2)

let first=document.querySelector("p")
console.dir(first)

let all=document.querySelectorAll("p")
console.dir(all)

let firstclass=document.querySelector(".heading2")
console.dir(firstclass)

let id=document.querySelector("#heading ")
console.dir(id)

let newbtn=document.createElement("button")
newbtn.innerText="EndBtn"


let prebtn=document.createElement("button")
prebtn.innerText="PreBtn"
let div= document.querySelector("#box")
div.append(newbtn);
div.prepend(prebtn) 