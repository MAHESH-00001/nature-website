const navbtn = document.querySelector('.menu-btn');
const navlist = document.querySelector('.nav-list');

navbtn.addEventListener('click',function(){
    navlist.classList.toggle("active");
});