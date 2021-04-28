
let box1Header = "H-APPY";
let box2Header = "ACEBOOK";
let box3Header = "BANK TECH TEST";
let box4Header = "BOWLING CHALLENGE";
let box5Header = "NOTES";

let box1Content;
let box2Content;
let box3Content;
let box4Content;
let box5Content;


  document.getElementById("box1").addEventListener('mouseover', function(){
    first.innerHTML = "Think outside the box. Could you try something new? What can you do with what you have? Could you substitute one ingredient for another to mix things up? Don't be afraid to experiment!";
    first.classList.add('para');
  });
  document.getElementById("box1").addEventListener('mouseout', function(){
      first.innerHTML = box1Header;
      first.classList.remove('para');
  });
    document.getElementById("box2").addEventListener('mouseover', function(){
      second.innerHTML = "Don't feel the need to create something extravagant, or with loads of different elements. Some of the best dishes are the most straightforward.";
      second.classList.add('para');
  });
    document.getElementById("box2").addEventListener('mouseout', function(){
      second.innerHTML = box2Header;
      second.classList.remove('para');
  });
  document.getElementById("box3").addEventListener('mouseover', function(){
      third.innerHTML = "Mess up? Don't worry! It's usually salvageable - have a google and see what you can do - add lemon to counter spice, or water to counter salt. And if it's beyond help, you've learnt something - treat yourself to a takeaway!";
      third.classList.add('para');
  });
   document.getElementById("box3").addEventListener('mouseout', function(){
      third.innerHTML = box3Header;
      third.classList.remove('para');
   });
  document.getElementById("box4").addEventListener('mouseover', function(){
      fourth.innerHTML = "Cooking won't become a habit if you don't enjoy it, so don't make it into a source of stress for yourself. Everybody messes up and no one will judge you for it but yourself - so don't judge yourself, indulge all your most experimental whims, and give yourself a night off when you need it!";
      fourth.classList.add('para');
  });
   document.getElementById("box4").addEventListener('mouseout', function(){
      fourth.innerHTML =  box4Header;
      fourth.classList.remove('para');
   });
   document.getElementById("box5").addEventListener('mouseover', function(){
    fifth.innerHTML = "BOWLING CHALLENGE";
    fifth.classList.add('para');
});
 document.getElementById("box5").addEventListener('mouseout', function(){
    fifth.innerHTML = box5Header;
    fifth.classList.remove('para');
 });

