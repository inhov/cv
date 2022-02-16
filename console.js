let togglebutton = document.querySelector(".toggle");
let count = 0
togglebutton.onclick = function () {
 count = count + 1;
 if(count%2===0) {
     document.querySelector(".cube").style.display = "none"
 } else {
    document.querySelector(".cube").style.display = "block"   
 }
}  


