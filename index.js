let scoreEl=document.getElementById("score-el")
console.log(scoreEl)

let count=0
function add1(){
    let result=count+=1
    scoreEl.textContent=result
    
}
function add2(){
    let result=count+=2
    scoreEl.textContent=result
    
}
function add3(){
    let result=count+=3
    scoreEl.textContent=result
    
}
let guestEl=document.getElementById("guest-el");
console.log(guestEl)

let guestcount=0
function addone(){
    let result1=guestcount+=1
    guestEl.textContent=result1
    
}
function addtwo(){
    let result1=guestcount+=2
    guestEl.textContent=result1
    
}
function addthree(){
    let result1=guestcount+=3
    guestEl.textContent=result1
    
}