let toaddbutton = document.getElementById('addbutton');
let torembutton = document.getElementById('rembutton');
let inputfield = document.getElementById('inputfield');
let todocontainer = document.getElementById('todocontainer');

toaddbutton.addEventListener('click', ()=>{
    var paragraph=document.createElement('p');
    paragraph.classList.add('.paragraph-styling');
    paragraph.innerText = inputfield.value;
    todocontainer.appendChild(paragraph);
    inputfield.value = "";
     
    paragraph.addEventListener('click', ()=>{
        paragraph.style.textDecoration = "line-through";
        })



    paragraph.addEventListener('dblclick', () =>{
    todocontainer.removeChild(paragraph);
    })

})



// let myName, myRole;
// let array = ['Dhrub', vWeb Developer'];
// [myName, myRole] = array;        
// console.log(myName, my Role);  
