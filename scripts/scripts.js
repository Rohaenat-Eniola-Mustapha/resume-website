!function(o,c){
    var n = c.documentElement,
    t = " w-mod-";
    n.className += t + "js";

    // Check if the browser supports touch events
    ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) && 
        (n.className += t + "touch");
}(window, document);

WebFont.load({
    google: {
      families: [
        "Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
        "EB Garamond:regular",
        "Source Sans Pro:200,300,regular,600,700,900"
      ]
    }
  });

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }