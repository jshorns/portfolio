document.addEventListener('DOMContentLoaded', function() {
  // Your code here...

  document.getElementById("first").addEventListener('mouseover', function(){
    first.innerHTML = "Think outside the box. Could you try something new? What can you do with what you have? Could you substitute one ingredient for another to mix things up? Don't be afraid to experiment!";
    first.classList.add('para');
  });
  document.getElementById("first").addEventListener('mouseout', function(){
      first.innerHTML = "GET CREATIVE";
      first.classList.remove('para');
  });
    document.getElementById("second").addEventListener('mouseover', function(){
      second.innerHTML = "Don't feel the need to create something extravagant, or with loads of different elements. Some of the best dishes are the most straightforward.";
      second.classList.add('para');
  });
    document.getElementById("second").addEventListener('mouseout', function(){
      second.innerHTML = "KEEP IT SIMPLE";
      second.classList.remove('para');
  });
  document.getElementById("third").addEventListener('mouseover', function(){
      third.innerHTML = "Mess up? Don't worry! It's usually salvageable - have a google and see what you can do - add lemon to counter spice, or water to counter salt. And if it's beyond help, you've learnt something - treat yourself to a takeaway!";
      third.classList.add('para');
  });
   document.getElementById("third").addEventListener('mouseout', function(){
      third.innerHTML = "DON'T PANIC";
      third.classList.remove('para');
   });
  document.getElementById("fourth").addEventListener('mouseover', function(){
      fourth.innerHTML = "Cooking won't become a habit if you don't enjoy it, so don't make it into a source of stress for yourself. Everybody messes up and no one will judge you for it but yourself - so don't judge yourself, indulge all your most experimental whims, and give yourself a night off when you need it!";
      fourth.classList.add('para');
  });
   document.getElementById("fourth").addEventListener('mouseout', function(){
      fourth.innerHTML = "HAVE FUN!";
      fourth.classList.remove('para');
   });
  


});
