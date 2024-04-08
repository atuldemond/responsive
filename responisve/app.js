let logo1 = document.querySelector("#logo1");
let logo2 = document.querySelector("#logo2");
let menu = document.querySelector(".menu")

logo1.addEventListener("click",function(){

   menu.classList.toggle("openmenu")
   menu.style.left="0px"
   logo2.style.display="block"
   logo1.style.display="none"

})

logo2.addEventListener("click",function(){

   menu.classList.toggle("openmenu")
   menu.style.left="-100%"
   logo2.style.display="none"
   logo1.style.display="block"

})