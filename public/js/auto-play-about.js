window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 635 || document.documentElement.scrollTop > 635) {
    document.getElementById("fixed-main-navigation").style.opacity = "100%";
    document.getElementById("fixed-main-navigation").style.pointerEvents = "auto";
    document.getElementById("fixed-main-navigation").style.cursor = "pointer";
  } else {
    document.getElementById("fixed-main-navigation").style.opacity = "0%";
    document.getElementById("fixed-main-navigation").style.pointerEvents = "none";
    document.getElementById("fixed-main-navigation").style.cursor = "default";
  }

  if(document.documentElement.scrollTop < 6750 && document.documentElement.scrollTop > 6450){
    document.getElementById("myVideo").play();
  } else{
    document.getElementById("myVideo").pause();
  }
}
