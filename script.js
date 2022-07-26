
var count=[68,212,33];
var num_1=document.querySelector('#num-1')
var num_2=document.querySelector('#num-2')
var num_3=document.querySelector('#num-3')
var searching=""


function removeBtn(element){
    element.remove()
}

function numberLikes1(){
    count[0]++;
    num_1.innerText=count[0]
}
function numberLikes2(){
    count[1]++;
    num_2.innerText=count[1]
}
function numberLikes3(){
    count[2]++;
    num_3.innerText=count[2]
}

function setValue(element){
searching=element.value
}
function search(){
    alert('You are searching for '+'"'+ searching +'"')

}