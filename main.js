window.onload = function(){
  console.log("DOM Loaded");

  window.sr = ScrollReveal({ reset: true, mobile: true, rotate: { x: 50, y: 50, z: 50 }, });

    sr.reveal('.mystorysummary');
    sr.reveal('.mystorytext');


 // Scroll Reveal Attribution:
 // https://github.com/jlmakes/scrollreveal
 // https://scrollrevealjs.org/



// end window.onload
};
