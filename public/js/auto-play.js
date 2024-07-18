window.onscroll = function(){scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 1115 || document.documentElement.scrollTop > 1115) {
    document.getElementById("fixed-main-navigation").style.opacity = "100%";
    document.getElementById("fixed-main-navigation").style.pointerEvents = "auto";
    document.getElementById("fixed-main-navigation").style.cursor = "pointer";
  } else {
    document.getElementById("fixed-main-navigation").style.opacity = "0%";
    document.getElementById("fixed-main-navigation").style.pointerEvents = "none";
    document.getElementById("fixed-main-navigation").style.cursor = "default";
  }

  if(document.documentElement.scrollTop < 2050 && document.documentElement.scrollTop > 1650){
    var vid = document.getElementById("myVideo").play();
  } else{
    document.getElementById("myVideo").pause();
  }

  if(document.documentElement.scrollTop < 2450 && document.documentElement.scrollTop > 2050){
    var vid = document.getElementById("myVideo1").play();
  } else{
    document.getElementById("myVideo1").pause();
  }

  if(document.documentElement.scrollTop < 3050 && document.documentElement.scrollTop > 2450){
    var vid = document.getElementById("myVideo2").play();
  } else{
    document.getElementById("myVideo2").pause();
  }

  if(document.documentElement.scrollTop < 3550 && document.documentElement.scrollTop > 3050){
    var vid = document.getElementById("myVideo3").play();
  } else{
    document.getElementById("myVideo3").pause();
  }
}
