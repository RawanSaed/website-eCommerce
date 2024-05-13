
  var skirt1 = ['images/pic1.jpg','images/pic2.jpg'];
  var current = 0;
  
  function next1() {
   current = current + 1;
   if (current == skirt1.length) { current = 0; }
   document.getElementById('image1').src = skirt1[current]; 
  }
  function previous1() { 
  current = current - 1;
  if (current < 0) { current = skirt1.length-1; }
  document.getElementById('image1').src = skirt1[current]; 
  }


   var skirt2 = ['images/pic3.jpg','images/pic4.jpg','images/pic5.jpg','images/pic6.jpg'];
  var current = 0;
  
  function next2() {
   current = current + 1;
   if (current == skirt2.length) { current = 0; }
   document.getElementById('image2').src = skirt2[current]; 
  }
  function previous2() { 
  current = current - 1;
  if (current < 0) { current = skirt2.length-1; }
  document.getElementById('image2').src = skirt2[current]; 
  }

   var skirt3 = ['images/pic8.jpg','images/pic9.jpg','images/pic10.jpg'];
  var current = 0;
  
  function next3() {
   current = current + 1;
   if (current == skirt3.length) { current = 0; }
   document.getElementById('image3').src = skirt3[current]; 
  }
  function previous3() { 
  current = current - 1;
  if (current < 0) { current = skirt3.length-1; }
  document.getElementById('image3').src = skirt3[current]; 
  }
  
   var pants1 = ['images/pic11.jpg','images/pic12.jpg','images/pic13.jpg','images/pic14.jpg'];
  var current = 0;
  
  function next4() {
   current = current + 1;
   if (current == pants1.length) { current = 0; }
   document.getElementById('image4').src = pants1[current]; 
  }
  function previous4() { 
  current = current - 1;
  if (current < 0) { current = pants1.length-1; }
  document.getElementById('image4').src = pants1[current]; 
  }
  
    var pants2 = ['images/pic18.jpg','images/pic19.jpg','images/pic20.jpg'];
  var current = 0;
  
  function next6() {
   current = current + 1;
   if (current == pants2.length) { current = 0; }
   document.getElementById('image6').src = pants2[current]; 
  }
  function previous6() { 
  current = current - 1;
  if (current < 0) { current = pants2.length-1; }
  document.getElementById('image6').src = pants2[current]; 
  }
  
     var top1 = ['images/pic22.jpg','images/pic23.jpg','images/pic24.jpg'];
  var current = 0;
  
  function next8() {
   current = current + 1;
   if (current == top1.length) { current = 0; }
   document.getElementById('image8').src = top1[current]; 
  }
  function previous8() { 
  current = current - 1;
  if (current < 0) { current = top1.length-1; }
  document.getElementById('image8').src = top1[current]; 
  }
  
  
     var top2 = ['images/pic25.jpg','images/pic26.jpg','images/pic27.jpg','images/pic28.jpg'];
  var current = 0;
  
  function next9() {
   current = current + 1;
   if (current == top2.length) { current = 0; }
   document.getElementById('image9').src = top2[current]; 
  }
  function previous9() { 
  current = current - 1;
  if (current < 0) { current = top2.length-1; }
  document.getElementById('image9').src = top2[current]; 
  }
  
  
     var top3 = ['images/pic29.jpg','images/pic30.jpg'];
  var current = 0;
  
  function next10() {
   current = current + 1;
   if (current == top3.length) { current = 0; }
   document.getElementById('image10').src = top3[current]; 
  }
  function previous10() { 
  current = current - 1;
  if (current < 0) { current = top3.length-1; }
  document.getElementById('image10').src = top3[current]; 
  }
  
   var pejama1 = ['images/pic31.jpg','images/pic32.jpg','images/pic33.jpg'];
  var current = 0;
  
  function next11() {
   current = current + 1;
   if (current == pejama1.length) { current = 0; }
   document.getElementById('image11').src = pejama1[current]; 
  }
  function previous11() { 
  current = current - 1;
  if (current < 0) { current = pejama1.length-1; }
  document.getElementById('image11').src = pejama1[current]; 
  }
  
   var pejama2 = ['images/pic34.jpg','images/pic35.jpg'];
  var current = 0;
  
  function next12() {
   current = current + 1;
   if (current == pejama2.length) { current = 0; }
   document.getElementById('image12').src = pejama2[current]; 
  }
  function previous12() { 
  current = current - 1;
  if (current < 0) { current = pejama2.length-1; }
  document.getElementById('image12').src = pejama2[current]; 
  }
