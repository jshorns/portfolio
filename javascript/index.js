
let box1Header = "H-APPY";
let box2Header = "ACEBOOK";
let box3Header = "BANK TECH TEST";
let box4Header = "BOWLING CHALLENGE";
let box5Header = "NOTES";

let box1Content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
let box2Content = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
let box3Content = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
let box4Content = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
let box5Content = "+1 synth sustainable duis la croix glossier, sint freegan pitchfork williamsburg craft beer esse affogato. Polaroid biodiesel tilde eu seitan.";

$('a').each(function() {
      $(this).click(function(event) {
          event.preventDefault();
          event.stopPropagation();
          window.open(this.href, '_blank');
      });
  });


 
  $("#box1").mouseenter(function() {
    $("#box1header").toggle();
    $("#box1content").toggle();
  })
  $("#box1").mouseleave(function() {
    $("#box1header").toggle();
    $("#box1content").toggle();
  })

  $("#box2").mouseenter(function() {
    $("#box2header").toggle();
    $("#box2content").toggle();
  })
  $("#box2").mouseleave(function() {
    $("#box2header").toggle();
    $("#box2content").toggle();
  })

  $("#box3").mouseenter(function() {
    $("#box3header").toggle();
    $("#box3content").toggle();
  })
  $("#box3").mouseleave(function() {
    $("#box3header").toggle();
    $("#box3content").toggle();
  })

  $("#box4").mouseenter(function() {
    $("#box4header").toggle();
    $("#box4content").toggle();
  })
  $("#box4").mouseleave(function() {
    $("#box4header").toggle();
    $("#box4content").toggle();
  })

  $("#box5").mouseenter(function() {
    $("#box5header").toggle();
    $("#box5content").toggle();
  })
  $("#box5").mouseleave(function() {
    $("#box5header").toggle();
    $("#box5content").toggle();
  })

  $("#box6").mouseenter(function() {
    $("#box6header").toggle();
    $("#box6content").toggle();
  })
  $("#box6").mouseleave(function() {
    $("#box6header").toggle();
    $("#box6content").toggle();
  })


