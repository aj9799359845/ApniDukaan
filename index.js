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

let btn = document.querySelector('.btn-dark')
// console.log(btn)
btn.addEventListener('click', (e)=>{
  // console.log("Clicked")
  e.preventDefault()
  let name = document.getElementById('name')
  let email = document.getElementById('email')
  let phone = document.getElementById('phone')
  str1 = name.value
  str2 = email.value
  str3 = phone.value
  let regex = /^[ a-zA-Z_]{3,10}$/
  // console.log(regex.exec(str1))
  // if(regex.test(str1)){
  //   console.log("Name is valid")
  // }
  // else{
  //   console.log("Name is not valid")
    
  // }
  let reg = /^[1-9][0-9]{9}$/
  // console.log(reg.exec(str3))
  // if(reg.test(str3)){
  //   console.log("Number is valid")
  // }
  // else{
  //   console.log("Number is not valid")
    
  // }
  let re = /^[1-9 a-zA-Z_][0-9a-zA-Z]+@[a-zA-z]{2,9}\.[a-zA-Z]{2,5}$/
  // console.log(re.exec(str2))
  // console.log(email.value)
  if(regex.test(str1) == false){
    alert("Please fill the name correctly")
    name.focus()
    return false;
  }
  else if(reg.test(str3) == false){
    alert("Please fill the phone correctly")
    phone.focus()
    return false;
  }
  else if(re.test(str2) == false){
    alert("Please fill the email correctly")
    email.focus()
    return false;    
  }
else{
  console.log("Everything is fine")
  name.value = ""
  phone.value = ""
  email.value = ""
  alert("Success, your details were submitted")
  return true
}
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