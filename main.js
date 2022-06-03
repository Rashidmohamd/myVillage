const mentbtn = document.querySelector(".menu")
    mentbtn.addEventListener("click", excute);
let cort = false;

function excute() {
   
    if (!cort) {
        mentbtn.classList.add("close");
        
        document.querySelector(".sect1").style.transform = "translate3d(0,0,0)";
        document.querySelector(".sect2").style.transform = "translate3d(0,0,0)";
        document.querySelector(".navsection").style.visibility = "visible";
        document.querySelector(".navsection .container").style.background = "rgba(255,255,255,0.8"
        


        cort = true;
    } else {
        mentbtn.classList.remove("close");
        document.querySelector(".sect1").style.transform = "translate3d(0,100%,0)";
        document.querySelector(".sect2").style.transform = "translate3d(0,-100%,0)";
          document.querySelector(".navsection").style.visibility = "hidden";


        cort = false;
    }
};



