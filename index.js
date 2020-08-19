let burger = document.getElementById('burger1')
rightNav = document.querySelector('.right-nav')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
// burger=document.querySelector('.burger')
console.log("Burger is", burger)
burger.addEventListener('click', ()=>{
  rightNav.classList.toggle('v-class-resp')    
  navList.classList.toggle('v-class-resp')    
  navbar.classList.toggle('h-nav-resp')    
    
})

// let hnav= document.querySelector('.h-nav-resp')
// let vclass = document.querySelectorAll('.v-class-resp')
//     if(hnav.style.height == "72px"){
//     // console.log(hnav, vclass)
//     vclass.forEach(function(element){
// console.log(element)
//         element.style.opacity=1;
//     })
//     hnav.style.height="470px";
// }
// else{
  
//     // console.log(hnav, vclass)
//     vclass.forEach(function(element){
// console.log(element)
//         element.style.opacity=0;
//     })
//     hnav.style.height="72px";
// }