const mentbtn = document.querySelector(".menu")
    mentbtn.addEventListener("click", excute);
let cort = false;

const imgclass = document.querySelectorAll(".img");
function excute() {
    if (!cort) {
        mentbtn.classList.add("close");
        document.querySelector(".sect1").style.transform = "translate3d(0,0,0)";
        document.querySelector(".sect2").style.transform = "translate3d(0,0,0)";
        


        cort = true;
    } else {
        mentbtn.classList.remove("close");
        document.querySelector(".sect1").style.transform = "translate3d(0,100%,0)";
        document.querySelector(".sect2").style.transform = "translate3d(0,-100%,0)";


        cort = false;
    }
};


function bgloop() {
    const showclass = document.querySelector(".show");
    showclass.classList.remove("show");
    if (showclass.nextElementSibling) {
        showclass.nextElementSibling.classList.add("show");
    } else {

        imgclass[0].classList.add("show")
        
    }
}
// setInterval(() => {
//     bgloop();
// },3000)