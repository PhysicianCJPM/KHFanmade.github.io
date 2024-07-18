window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("fixed-main-navigation").style.opacity = "100%";
    document.getElementById("fixed-main-navigation").style.pointerEvents = "auto";
    document.getElementById("fixed-main-navigation").style.cursor = "pointer";
  } else {
    document.getElementById("fixed-main-navigation").style.opacity = "0%";
    document.getElementById("fixed-main-navigation").style.pointerEvents = "none";
    document.getElementById("fixed-main-navigation").style.cursor = "default";
  }
}
