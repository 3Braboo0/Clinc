let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if(sidebar.classList.contains("open")){
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the icons class
}else {
    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the icons class
}
}

//Active class for the navbar
let navbarLinks = document.querySelectorAll(".sidebar a");

navbarLinks.forEach((item)=>{
  item.addEventListener("click", ()=>{
    navbarLinks.forEach((item)=>{
      item.classList.remove("active");
    }
      )
    item.classList.toggle("active");
  }
    )});

//Word change animation:
const word=document.querySelector(".second");
const wordLoad = () => {
    setTimeout(() => {
        word.textContent = "Smiling";
    },0);
    setTimeout(() => {
        word.textContent = "Shinning";
    },4000);
    setTimeout(() => {
        word.textContent = "Sparkling";
    },8000);
    setTimeout(() => {
        word.textContent = "Clean";
    },12000);
    setTimeout(() => {
        word.textContent = "Bright";
    },16000);
}
wordLoad();
setInterval(wordLoad,20000);
//Appointment Close Button
let fc=document.querySelector('.fc'); 
let clos=document.querySelector('#close');
let link=document.getElementById('reserve');
link.addEventListener('click', ()=>{
  fc.style.top='0';
});

clos.addEventListener('click',()=>{
  fc.style.top='-120%';
});


