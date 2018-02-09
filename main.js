window.onload = function(){
  console.log("DOM Loaded");


  // SCROLL REVEAL
  window.sr = ScrollReveal({ reset: true, mobile: true, rotate: { x: 0, y: 0, z: 0 }, });

    sr.reveal('.mystoryblurb');
    sr.reveal('.mystorysummary');
    sr.reveal('.mystorytext');
    sr.reveal('.toplinks');

    // Scroll Reveal Attribution:
    // https://github.com/jlmakes/scrollreveal
    // https://scrollrevealjs.org/


// end window.onload
};
